//모듈
const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const { exit } = require("process");
const FileStore = require("session-file-store")(expressSession);

// const static = require('serve-static');
app.use(cookieParser());
//??
app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
// 세션 설정
app.use(
  expressSession({
    secret: "my key",
    resave: false,
    saveUninitialized: true,
    store: new FileStore(),
  })
);
// body-parser를 이용해 application/x-www-form-urlencoded 형식 파싱
app.use(bodyParser.urlencoded({ extended: false }));
// body-parser를 이용해 application/json 형식 파싱
app.use(bodyParser.json());

//라우터
router.route("/login").post(function (req, res) {
  console.log("로그인 요청이 들어옴", req.body.id, req.session.id);
  //로그인 성공이라고 가정
  res.cookie("id", req.body.id);
  req.session.id = "req.body.id";
});

router.route("/login").get(function (req, res) {
  res.writeHead("200", { "Content-Type": "text/html;charset=utf8" });
  res.write("<h1>Express 당신이 보낸 쿠키에 저장된 id 값입니다</h1>");
  res.write("<div><p>id : " + req.cookies.id + "</p></div>");
  res.write("<div><p>id : " + req.session.id + "</p></div>");
  res.end();
});

//로그아웃하기
router.get("/logout", (req, res) => {
  console.log("로그아웃 성공");
  req.session.destroy(function (err) {
    // 세션 파괴후 할 것들
    res.redirect("/");
  });
});

app.use("/", router);

//프론트와 포트를 다르게 해야함
const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
