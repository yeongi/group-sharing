//모듈
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const FileStore = require("session-file-store")(expressSession);

app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));

//route를 분리한 것을 가져옴
const route = require("./route/route.js");

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

app.use("/", route);

//프론트와 포트를 다르게 해야함
const port = 5000;

//404 처리 부분
app.use((req, res, next) => {
  res.status(404).send("일치하는 주소가 없습니다.");
});

//500 상태 표시 후 에러 메시지 전송
app.use((req, res, next) => {
  res.status(500).send("서버에러!");
});

//middleware
//port에 접속 성공하면 콜백 함수를 실행시킨다.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
