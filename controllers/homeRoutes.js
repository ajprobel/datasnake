const router = require("express").Router();
const { User, Score } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  res.render("homepage");
});

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
    // res.render("highscores", {scores});
    res.status(200).json({ scores });
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
    // res.render("userinfo", user);
    res.status(200).send(user.username);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/finduser", (req, res) => {
  res.render("finduser");
});
module.exports = router;
