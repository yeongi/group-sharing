const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("../../public/index", {
    greeting: "방갑습니다 . react x node ",
  });
});

module.exports = router;
