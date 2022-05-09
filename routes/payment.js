const { createPayment } = require("../controllers/payment");
const router = require("express").Router();

router.post("/payment", async (req, res) => {
  const payment = await createPayment(req.body.tokenId, req.body.amount);
  res.status(200).json(payment);
});

module.exports = router;
