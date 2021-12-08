import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import classes from "./stylesheet/page.module.css";
import React, { useState } from "react";
import Body from "../layout/Body";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [interest, setInterest] = useState("");

  const handleChange = (e) => {
    setInterest(e.target.value);
  };

  return (
    <>
      <Body message="회원가입 페이지">
        <div className={classes["form-wrapper"]}>
          <form>
            <div className={classes["item"]}>
              <label>아이디 : </label>
              <TextField
                required
                label="ID"
                placeholder="아이디를 입력하세요."
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
            <div className={classes["item"]}>
              <label>이메일 : </label>
              <TextField
                required
                label="이메일"
                placeholder="이메일을 입력하세요."
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
              <Button variant="contained">제출</Button>
            </div>
          </form>
        </div>
      </Body>
    </>
  );
};

export default SignUp;
