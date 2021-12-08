const express = require("express");

const router = express.Router();

//라우터
router.route("/login").post(function (req, res) {
  console.log("로그인 요청이 들어옴", req.body.id, req.session.id);
  //로그인 성공이라고 가정
  req.session.isLoggedIn = true;
  req.session.userId = req.body.id;
  req.session.save(() => {
    // 세션 스토어에 적용하는 작업
  });
});

//로그아웃하기
router.get("/logout", (req, res) => {
  console.log("로그아웃 성공");
  req.session.destroy(function (err) {
    // 세션 파괴후 할 것들
    console.log("세션 파괴");
  });
});

module.exports = router;
