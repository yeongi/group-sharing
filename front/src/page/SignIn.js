import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import classes from "./stylesheet/page.module.css";
import React, { useState } from "react";
import Body from "../layout/Body";
import { Link } from "react-router-dom";
import UserAPI from "../lib/api/UserApi";

const SignUp = () => {
  const [interest, setInterest] = useState("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setInterest(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const result = await UserAPI.signIn({
      name: name,
      id: id,
      password: pw,
    });
    console.log(result);
  };

  return (
    <>
      <Body message="회원가입 페이지">
        <div className={classes["form-wrapper"]}>
          <form onSubmit={submitHandler}>
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
            <div className={classes["item"]}>
              <label>이름 : </label>
              <TextField
                required
                label="name"
                value={name}
                placeholder="이름을 입력하세요"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <br />
            </div>
            <div className={classes["item"]}>
              <InputLabel>관심사를 고르세요.</InputLabel>
              <label>관심사 : </label>
              <Select
                labelId="simple-label"
                value={interest}
                onChange={handleChange}
              >
                <MenuItem value={"Cumputer"}>컴퓨터</MenuItem>
                <MenuItem value={"Developer"}>개발자</MenuItem>
                <MenuItem value={"Java"}>자바</MenuItem>
                <MenuItem value={"C"}>C</MenuItem>
                <MenuItem value={"JS"}>자바스크립트</MenuItem>
                <MenuItem value={"Python"}>파이썬</MenuItem>
              </Select>
              <br />
            </div>
            <div className={classes["item"]}>
              <Button outlined="contained" color="error">
                <Link to="/signUp">나가기</Link>
              </Button>
              <Button variant="contained" type="submit">
                제출
              </Button>
            </div>
          </form>
        </div>
      </Body>
    </>
  );
};

export default SignUp;
