//모듈
const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const path = require("path");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const static = require('serve-static');
app.use(cookieParser());
//??
app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
// body-parser를 이용해 application/x-www-form-urlencoded 형식 파싱
app.use(bodyParser.urlencoded({ extended: false }));
// body-parser를 이용해 application/json 형식 파싱
app.use(bodyParser.json());

//라우터
router.route('/login').post(function(req,res) {
  //로그인 성공이라고 가정
  res.cookie('id',req.body.id);
  res.redirect('.');
});

router.route('/login').get(function(req,res) {
  res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
  res.write('<h1>Express 당신이 보낸 쿠키에 저장된 id 값입니다</h1>');
  res.write('<div><p>id : ' + req.cookies.id + '</p></div>');
  res.end();
});

app.use('/',router);


//프론트와 포트를 다르게 해야함
const port = 3002;
app.listen(port, () => console.log(`Listening on port ${port}`));
