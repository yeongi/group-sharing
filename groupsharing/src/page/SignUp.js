import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <h1>로그인 페이지</h1>
      <form>
        <label>아이디 : </label>
        <input type="text" name="id" />
        <label>비밀번호 : </label>
        <input type="text" name="pw" />
        <input type="submit" value="제출" />
      </form>
      <Link to="/signIn">회원가입 하기</Link>
    </>
  );
};

export default SignUp;
