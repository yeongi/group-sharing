var express = require("express");
var router = express.Router();
const UserService = require("./user.service");
const interestService = require("../interest/interest.service");

//회원가입
router.post("/signUp", async (req, res) => {
  try {
    //const { name, id, password, user_num, interest_num } = req.body;
    const result = await UserService.insertUser(req.body);
    result = await interestService.addInterestUser(req.body);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error });
  }
});

//로그인
router.post("/login", async (req, res) => {
  try {
    const result = await UserService.checkUser(req.body);
    console.log(result);
    if (result === 0) {
      res.status(200).json({ status: 200, body: result, message: "Fail" });
    } else {
      res.status(200).json({ status: 200, data: result, message: "Success" });
    }
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

//그룹 번호로 그룹간 공유하기
router.post("/grp/:user_num", async (req, res) => {
  try {
    //const { user_num } = req.body;
    const result = await UserService.getGroupByUserNum(req.body);
    console.log(result);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

module.exports = router;
