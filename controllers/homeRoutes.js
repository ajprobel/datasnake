const router = require("express").Router();
const { User, Score } = require("../models");
// Had to import sequelize instance to make 'raw query'
const sequelize = require("../config/connection");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  res.render("homepageloggedin", { logged_in: req.session.logged_in });
});

//working!
router.get("/highscores", withAuth, async (req, res) => {
  try {
    const scoreData = await Score.findAll({
      attributes: ["score"],
      order: [["score", "DESC"]],
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    const scores = scoreData.map((score) => score.get({ plain: true }));
    res.render("highscorespage", { scores, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/makeaccount", async (req, res) => {
  res.render("makeaccount");
});

router.get("/login", (req, res) => {
  res.render("homepageloggedout");
});

router.get("/account", withAuth, async (req, res) => {
  try {
    const userId = req.session.user_id;
    const userData = await User.findOne({
      where: { id: userId },
      attributes: ["first_name", "last_name", "username"],
      include: [
        {
          model: Score,
          attributes: ["score"],
        },
      ],
    });
    const user = userData.get({ plain: true });
    console.log(user);
    res.render("account", {
      ...user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// route added with tweak/routes-n-views
router.get("/userinfo/:query", withAuth, async (req, res) => {
  try {
    const searchQuery = req.params.query;
    var firstLet;
    var secLet;
    var lastLet;
    // MDN article on 'String.prototype.at()' method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at
    const getOutsideLetters = () => {
      firstLet = searchQuery.at(0);
      secLet = searchQuery.at(1);
      lastLet = searchQuery.at(searchQuery.length - 1);
    };
    getOutsideLetters();
    console.log("first:" + firstLet + "second:" + secLet + "last:" + lastLet);
    // W3 article on MySQL 'LIKE' queries: https://www.w3schools.com/mysql/mysql_like.asp
    const [results, metadata] = await sequelize.query(
      `SELECT id FROM user WHERE username LIKE "${firstLet + secLet}%${lastLet}" OR first_name LIKE "${firstLet + secLet}%${lastLet}" OR last_name LIKE "${firstLet + secLet}%${lastLet}";`
    );
    const thisUser = results[0];
    const userId = thisUser.id;
    const userData = await User.findOne({
      where: { id: userId },
      attributes: ["first_name", "last_name", "username"],
      include: [
        {
          model: Score,
          attributes: ["score"],
        },
      ],
    });
    const user = userData.get({ plain: true });
    console.log(user);
    res.render("usernameinfopage", {
      ...user,
      logged_in: req.session.logged_in,
    });
    // BELOW is the attempted sequelize query which failed
    // const userData = await User.findOne({
    //   where: {
    //     [Op.or]: [
    //       { username: searchQuery },
    //       { first_name: searchQuery },
    //       { last_name: searchQuery },
    //     ],
    //   },
    //   // attributes: ["first_name", "last_name", "username"],
    //   // include: [
    //   //   {
    //   //     model: Score,
    //   //     attributes: ["score"],
    //   //   },
    //   // ],
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/usersearch", withAuth, (req, res) => {
  res.render("usersearch", { logged_in: req.session.logged_in });
});

module.exports = router;
