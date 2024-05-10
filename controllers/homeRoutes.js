const router = require("express").Router();
const { User } = require("../models");

router.get("/", async (req, res) => {
  try {
    const userData = await userData.findAll();
    const users = userData.map((user) => user.get({ plain: true }));
    console.log(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
