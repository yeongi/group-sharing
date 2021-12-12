var express = require("express");
var router = express.Router();
const UserService = require("../user/user.service");
const groupService = require("../group/group.service");
const postService = require("./post.service");

//게시글 전부 가져오기
router.get("/", async (req, res) => {
  try {
    const result = await postService.getAllPost();//파라미터 필요 없음
    console.log(result);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

//게시글 번호로 글 하나 가져오기
router.get("/post_num/:post_num", async (req, res) => {
  try {
    //const { post_num } = req.params;
    const result = await postService.getPostByPostNum(req.params);
    console.log(result);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

//그룹 번호로 글 하나 가져오기
router.get("/grp_num/:grp_num", async (req, res) => {
  try {
    //const { grp_num } = req.params;
    const result = await postService.getPostByPostNum(req.params);
    console.log(result);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

//회원번호로 글 하나 가져오기
router.get("/user_num/:user_num", async (req, res) => {
  try {
    //const { user_num } = req.params;
    const result = await postService.getPostByPostNum(req.params);
    console.log(result);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

//게시글 생성
router.post("/addPost", async (req, res) => {
  try {
     //const { user_num, grp_num, title, content, open_type, category, file_path } = req.body;
    const result = await postService.addPost(req.body);
    console.log(result);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

module.exports = router;
