import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginPost, logOutPost } from "../lib/axios";
import UserCtx from "../store/userContext";

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
      <h1>로그인 페이지</h1>
      <form onSubmit={loginHandler}>
        <label>아이디 : </label>
        <input type="text" value={id} onChange={idChangeHandler} />
        <label>비밀번호 : </label>
        <input type="text" name="pw" />
        <input type="submit" value="제출" />
      </form>

      <Link to="/signIn">회원가입 하기</Link>
    </>
  );
};

export default SignUp;
