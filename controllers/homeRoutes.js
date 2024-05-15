const router = require("express").Router();
const { User, Score } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  res.render("homepageloggedin");
});

//working!
router.get("/highscores", async (req, res) => {
  try {
    const scoreData = await Score.findAll({
      attributes: ["high_score"],
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    const scores = scoreData.map((score) => score.get({ plain: true }));
    console.log({ scores });
    res.render("highscorespage", { scores });
  } catch (err) {
    res.status(500).json(err);
  }
});

//good!
router.get("/makeaccount", async (req, res) => {
  res.render("makeaccount");
});

//working!
router.get("/login", (req, res) => {
  res.render("homepageloggedout");
});

router.get("/userinfo", async (req, res) => {
  try {
    // need to add res.session.user_id
    const userId = 1;
    const userData = await User.findOne({
      where: { id: userId },
      attributes: ["first_name", "last_name", "username"],
      include: [
        {
          model: Score,
          attributes: ["high_score"],
        },
      ],
    });
    const user = userData.get({ plain: true });
    console.log(user);
    res.render("usernameinfopage", user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/finduser", (req, res) => {
  res.render("finduser");
});
module.exports = router;
