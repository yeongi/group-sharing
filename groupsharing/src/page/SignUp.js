import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Body from "../layout/Body";
import { loginPost, logOutPost } from "../lib/axios";
import UserCtx from "../store/userContext";
import classes from "./stylesheet/page.module.css";

const SignUp = () => {
  const [id, setId] = useState("");

  const user = useContext(UserCtx);
  const navigate = useNavigate();

  const idChangeHandler = (e) => {
    setId(e.target.value);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    user.onLogIn();
    navigate("/");
    loginPost(id);
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
                placeholder="아이디를 입력하세요."
                onChange={idChangeHandler}
              />
              <br />
            </div>
            <div className={classes["item"]}>
              <label>비밀번호 : </label>
              <TextField
                required
                label="PW"
                placeholder="비밀번호를 입력하세요."
              />
              <br />
            </div>
            <Button variant="outline">
              <Link to="/">홈으로</Link>
            </Button>
            <Button variant="outline">
              <Link to="/signIn">회원가입 하기</Link>
            </Button>
            <Button variant="contained">제출</Button>
          </form>
        </div>
      </Body>
    </>
  );
};

export default SignUp;
