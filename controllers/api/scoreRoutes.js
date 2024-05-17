const router = require("express").Router();
const { Score } = require("../../models");

// router.put("/", async (req, res) => {
//   try {
//     const scoreData = await Score.update(
//       {
//         score: req.body.high_score,
//       },
//       {
//         where: {
//           user_id: req.body.user_id,
//         },
//       }
//     );

//     res.status(200).json(scoreData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.post("/newScore", async (req, res) => {
  try {
    const userId = req.session.user_id
    newScoreData = {
      user_id: userId,
      score: req.body.newScore
    }
    const newScore = await Score.create(newScoreData);
    res.status(200).json(newScore);
  } catch (err) {
    res.status(400).json(err);
  }
})

module.exports = router;
