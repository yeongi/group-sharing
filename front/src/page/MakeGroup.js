import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import UserCtx from "../store/userContext";
import GrpApi from "../lib/api/Group";

const MakeGroup = () => {
  const [name, setName] = useState("");
  const [intr, setIntr] = useState("");

  const userctx = useContext(UserCtx);
  const nav = useNavigate();

  const postMakeGrp = async (e) => {
    e.preventDefault();
    const result = await GrpApi.postMyGrp({
      interest_num: intr,
      grp_name: name,
      grp_leader: userctx.user.num,
    });
    const data = await result.json();
    console.log(data);
    if (data.message === "Success") {
      alert("그룹 만들기 완료");
      nav("/groups");
    }
  };

  return (
    <div>
      <h1>그룹 만들기</h1>
      <Link to="/groups">나가기</Link>
      <hr />
      <form onSubmit={postMakeGrp}>
        <label>그룹 이름 : </label>
        <TextField
          required
          label="그룹 이름"
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label> 관심사 : </label>
        <TextField
          required
          label="관심사"
          variant="standard"
          onChange={(e) => setIntr(e.target.value)}
          value={intr}
        />
        <br />
        <Button variant="contained" type="submit">
          그룹 추가 하기
        </Button>
      </form>
    </div>
  );
};

export default MakeGroup;
