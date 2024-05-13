const router = require("express").Router();
const { User, Score } = require("../models");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();
    const users = userData.map((user) => user.get({ plain: true }));
    console.log(users);
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/score", async (req, res) => {
  try {
    const scoreData = await Scores.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    const scores = scoreData.map((score) => score.get({ plain: true }));
    console.log(scores);
    res.render("highscores", scores);
    res.status(200).json(scores);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/makeaccount", async (req, res) => {
  res.render("makeaccount");
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/userinfo");
    return;
  }

  res.render("login");
});

router.get("/userinfo", (req, res) => {
  res.render("userinfo");
});

router.get("/finduser", (req, res) => {
  res.render("finduser");
});
module.exports = router;
