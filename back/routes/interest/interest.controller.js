var express = require("express");
var router = express.Router();
const interestService = require("./interest.service");

//관심사 전부 가져오기
router.get("/", async (req, res) => {
  try {
    const result = await interestService.getInterests();//파라미터 필요 없음
    console.log(result);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

//관심사 테이블에 관심사 하나 추가하기
router.post("/addInterest", async (req, res) => {
  try {
    //const { main_interest,sub_interest } = req.body;
    const result = await interestService.addInterest(req.body);
    console.log(result);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

//회원의 관심사 전부 가져오기
router.get("/userNum/:user_num", async (req, res) => {
  try {
    //const { user_num } = req.params;
    const result = await interestService.getUserInterests(req.params);
    console.log(result);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

//회원의 관심사 등록하기
router.post("/addInterestUser", async (req, res) => {
  try {
    //const { user_num,interest_num } = req.body;
    const result = await interestService.addInterestUser(req.body);
    console.log(result);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

module.exports = router;
