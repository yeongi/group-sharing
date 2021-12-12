var express = require("express");
var router = express.Router();
const userService = require("./user.service");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

//예시
router.post("/doRsv", async (req, res) => {
  try {
    const result = await ReservationService.doReservation(req.body);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});
module.exports = router;
