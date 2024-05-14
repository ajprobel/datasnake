const router = require("express").Router();
const { User, Score } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  res.render("homepage");
});

router.get("/highscores", async (req, res) => {
  try {
    const scoreData = await Score.findAll({
      include: [
        {
          model: User,
        },
      ],
    });
    const scores = scoreData.map((score) => score.get({ plain: true }));
    console.log(scores);
    // res.render("highscores", scores);
    res.status(200).json(scores);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/makeaccount", async (req, res) => {
  res.render("makeaccount");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/userinfo", (req, res) => {
  res.render("userinfo");
});

router.get("/finduser", (req, res) => {
  res.render("finduser");
});
module.exports = router;
