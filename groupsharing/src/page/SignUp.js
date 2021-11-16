import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginPost, logOutPost } from "../lib/axios";

const SignUp = () => {
  const [id, setId] = useState("");

  const idChangeHandler = (e) => {
    setId(e.target.value);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    loginPost(id);
  };

  const logoutHandler = (e) => {
    e.preventDefault();
    logOutPost();
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
      <input type="button" value="로그아웃" onClick={logoutHandler} />
      <Link to="/signIn">회원가입 하기</Link>
    </>
  );
};

export default SignUp;
