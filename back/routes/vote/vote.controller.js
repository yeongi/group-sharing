var express = require("express");
var router = express.Router();
const VoteService = require("./vote.service");

//투표 생성
router.post("/addVote", async (req, res) => {
  try {
    const result = await VoteService.addVote(req.body);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

//투표 진행 중인 투표 리스트 출력
router.get("/duringVote/:grp_num", async (req, res) => {
  try {
    const { grp_num } = req.params;
    const result = await VoteService.getDuringVote(grp_num);
    console.log(result);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

//투표 완료 투표 리스트 출력
router.get("/finishVote/:grp_num", async (req, res) => {
  try {
    const { grp_num } = req.params;
    const result = await VoteService.getFinishVote(grp_num);
    console.log(result);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

//투표 완료 상태 변경
router.post("/updateState", async (req, res) => {
  try {
    const result = await VoteService.updateState(req.body);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

//투표 응답
router.post("/resVote", async (req, res) => {
  try {
    const result = await VoteService.responseVote(req.body);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

//내가 투표 응답한 리스트 조회
router.get("/myVote/:user_num", async (req, res) => {
  try {
    const { user_num } = req.params;
    const result = await VoteService.getMyVote(user_num);
    console.log(result);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});
module.exports = router;
