var express = require("express");
var router = express.Router();
const UserService = require("../user/user.service");
const groupService = require("./group.service");

//그룹 전부 가져오기
router.get("/all", async (req, res) => {
  try {
    const result = await groupService.getAllGroups(); //파라미터 필요 없음
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

//그룹번호로 그룹관심사를 조인해서 가져오기
router.get("/withInterest/group_num/:group_num", async (req, res) => {
  try {
    const { group_num } = req.params;
    const result = await groupService.getGroupWithInterestByGroupNum(group_num);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

//그룹 생성
router.post("/addGroup", async (req, res) => {
  try {
    //const { interest_num, grp_name, grp_leader, grp_create_date } = req.body;
    const result = await groupService.addGroup(req.body);
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
    const result = await groupService.joinGroup(req.body);
    console.log(result);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

//회원_그룹의 가입상태정보 변경하기
router.get(
  "/change/user_num/:user_num/grp_num/:grp_num/register_state/:register_state",
  async (req, res) => {
    try {
      //const { user_num, grp_num, register_state } = req.params;
      const result = await groupService.changeState(req.params);
      console.log(result);
      res.status(200).json({ status: 200, data: result, message: "Success" });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error });
    }
  }
);

//그룹 번호로 공유그룹들 정보 확인하기
router.get("/groupSharing/grp_num/:grp_num", async (req, res) => {
  try {
    //const { grp_num } = req.params;
    const result = await groupService.getGroupSharingByGrpNum(req.params);
    console.log(result);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

//그룹 번호로 그룹간 공유하기
router.post("/startGroupSharing", async (req, res) => {
  try {
    //const { grp_num1,grp_num2,sharing_start_date,sharing_finish_date} = req.body;
    const result = await groupService.startGroupSharing(req.body);
    console.log(result);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

module.exports = router;
