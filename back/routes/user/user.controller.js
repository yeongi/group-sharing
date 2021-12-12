var express = require("express");
var router = express.Router();
const UserService = require("./user.service");

//회원가입
router.post("/signUp", async (req, res) => {
  try {
    const result = await UserService.insertUser(req.body);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
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

//관심사 전부 가져오기
router.post("/interest", async (req, res) => {
  try {
    const result = await UserService.getInterests();
    console.log(result);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

//그룹 생성
router.post("/group", async (req, res) => {
  try {
    const result = await UserService.addGroup(req.body);

    console.log(result);

    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

//그룹에 가입하기 (회원_그룹 생성)
router.post("/joinGroup", async (req, res) => {
  try {
    const result = await UserService.joinGroup(req.body);
    console.log(result);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

module.exports = router;
