import React, { useContext, useState } from "react";
import classes from "../stylesheet/page.module.css";

import { Button, TextField } from "@mui/material";
import UserCtx from "../../store/userContext";
import GrpApi from "../../lib/api/Group";
import { useNavigate } from "react-router-dom";

const GroupApply = (props) => {
  const userCtx = useContext(UserCtx);
  const navigater = useNavigate();
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [activity, setActivity] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const result = await GrpApi.postGrpApply({
      user_num: userCtx.user.num,
      grp_num: props.grpnum,
      nickname: nickName,
      email: email,
      main_activity: activity,
    });
    const data = await result.json();
    if (data.message === "Success") {
      alert("가입 완료");
      navigater("/");
    }
  };

  return (
    <div>
      <h1>{props.title} 그룹 가입 신청</h1>
      {userCtx.user.num}
      {props.grpnum}
      <hr />
      <div className={classes["form-wrapper"]}>
        <form onSubmit={submitHandler}>
          <label>닉네임 : </label>
          <TextField
            required
            label="nickname"
            value={nickName}
            placeholder="닉네임을 입력하세요."
            onChange={(e) => {
              setNickName(e.target.value);
            }}
          />
          <br />

          <label>이메일 : </label>
          <TextField
            required
            label="email"
            value={email}
            placeholder="이메일을 입력하세요."
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />

          <label>주요활동 : </label>
          <TextField
            required
            label="mainactivity"
            value={activity}
            placeholder="주요활동을 적어주세요."
            onChange={(e) => {
              setActivity(e.target.value);
            }}
          />
          <br />

          <Button variant="contained" type="submit">
            제출
          </Button>
        </form>
      </div>
    </div>
  );
};

export default GroupApply;
