const router = require("express").Router();
const { Score } = require("../../models");

router.put("/", async (req, res) => {
  try {
    const scoreData = await Score.update(
      {
        high_score: req.body.high_score,
      },
      {
        where: {
          user_id: req.body.user_id,
        },
      }
    );

    res.status(200).json(scoreData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
