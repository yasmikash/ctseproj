const router = require("express").Router();
const { createUser, signUserIn } = require("../controllers/auth");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const createdUser = await createUser(req.body);
    res.status(201).json(createdUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const result = await signUserIn(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
