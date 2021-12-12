import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Body from "../layout/Body";
import UserAPI from "../lib/api/UserApi";
import UserCtx from "../store/userContext";
import classes from "./stylesheet/page.module.css";

const SignUp = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const userCtx = useContext(UserCtx);
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    const result = await UserAPI.logIn({
      id: id,
      password: pw,
    });
    const data = await result.json();
    console.log("결과", data);
    if (data.message === "Fail") {
      alert("로그인 실패");
    } else {
      userCtx.onLogIn({
        isLoggedIn: "true",
        num: data.data.user_num,
        name: data.data.name,
      });
      navigate("/");
    }
  };

  return (
    <>
      <Body message="로그인 페이지">
        <div className={classes["form-wrapper"]}>
          <form onSubmit={loginHandler}>
            <div className={classes["item"]}>
              <label>아이디 : </label>
              <TextField
                required
                label="ID"
                value={id}
                placeholder="아이디를 입력하세요."
                onChange={(e) => {
                  setId(e.target.value);
                }}
              />
              <br />
            </div>
            <div className={classes["item"]}>
              <label>비밀번호 : </label>
              <TextField
                required
                label="PW"
                value={pw}
                type="password"
                placeholder="비밀번호를 입력하세요."
                onChange={(e) => {
                  setPw(e.target.value);
                }}
              />
              <br />
            </div>
            <Button variant="outline">
              <Link to="/">홈으로</Link>
            </Button>
            <Button variant="outline">
              <Link to="/signIn">회원가입 하기</Link>
            </Button>
            <Button variant="contained" onClick={loginHandler}>
              제출
            </Button>
          </form>
        </div>
      </Body>
    </>
  );
};

export default SignUp;
