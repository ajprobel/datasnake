const router = require("express").Router();
const { Score } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const scoreData = await Score.create({
      user_id: req.body.user_id,
      high_score: req.body.high_score,
    });

    res.status(200).json(scoreData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
