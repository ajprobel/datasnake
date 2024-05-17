const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(201).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// working
router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const userData = await User.findOne({
      where: { username: req.body.username },
    });
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Not using, but not ready to delete (tweak/routes-n-views)
{
  // router.get("/:query", async (req, res) => {
  //   try {
  //     const searchQuery = req.params.query;
  //     console.log(searchQuery);
  //     const userData = await User.findOne({
  //       where:
  //         // { username: searchQuery } ||
  //         { first_name: searchQuery },
  //       // || { last_name: searchQuery },
  //     });
  //     // const user = userData.get({ plain: true });
  //     // console.log(userData);
  //     res.redirect("/userinfo");
  //     //   , {
  //     //   ...user,
  //     //   logged_in: req.session.logged_in,
  //     // });
  //   } catch (err) {
  //     res.status(400).json(err);
  //   }
  // });
}
module.exports = router;
