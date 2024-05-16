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

//good!
router.get("/makeaccount", async (req, res) => {
  res.render("makeaccount", { logged_in: req.session.logged_in });
});

//working!
router.get("/login", (req, res) => {
  res.render("homepageloggedout");
});

//working!
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
    const [results, metadata] = await sequelize.query(
      `SELECT id FROM user WHERE username= "${searchQuery}" OR first_name= "${searchQuery}" OR last_name= "${searchQuery}";`
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
