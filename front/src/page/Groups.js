import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import classes from "./stylesheet/group.module.css";
import Header from "../layout/Header";
import { Button, TextField } from "@mui/material";

const Groups = () => {
  const [param, setParam] = useState("");

  const onChangeParamHandler = (e) => {
    setParam(e.target.value);
  };

  return (
    <>
      <Header message="그룹 찾기" />
      <div className={classes["wrapper"]}>
        <>
          <section className={classes["group-wrapper"]}>
            <article className={classes["search"]}>
              <TextField
                type="text"
                placeholder="검색어를 입력하세요."
                value={param}
                onChange={onChangeParamHandler}
              />
              <Button variant="contained" size="large">
                검색하기
              </Button>
              <hr />
              <div>그룹 검색 결과</div>
            </article>
            <article className={classes["result"]}>
              <p>그룹 검색 햇을 때 게시물</p>
              <Outlet />
            </article>
          </section>
        </>
      </div>
    </>
  );
};

export default Groups;
