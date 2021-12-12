var express = require("express");
var router = express.Router();
const UserService = require("./user.service");

//관심사 전부 가져오기
router.post("/interest", async (req, res) => {
  try {
    const result = await UserService.getInterests();//파라미터 필요 없음
    console.log(result);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

//그룹 생성
router.post("/group", async (req, res) => {
  try {
     //const { interest_num, grp_name, grp_leader, grp_create_date } = req.body;
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
    //const { user_num,grp_num,register_date,grade,register_state,nickname,email,main_activity  } = req.body;
    const result = await UserService.joinGroup(req.body);
    console.log(result);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

module.exports = router;
