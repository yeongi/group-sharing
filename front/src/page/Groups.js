import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import classes from "./stylesheet/group.module.css";

const Groups = () => {
  const [param, setParam] = useState("");

  const onChangeParamHandler = (e) => {
    setParam(e.target.value);
  };

  return (
    <div className={classes["wrapper"]}>
      <h1>그룹 찾기 페이지</h1>
      {
        <>
          <section className={classes["group-wrapper"]}>
            <article>
              <h1>그룹 검색하기</h1>
              <p>대충 그룹 나오는 창</p>
              <input
                type="text"
                placeholder="검색어를 입력하세요."
                value={param}
                onChange={onChangeParamHandler}
              />
              <Link to={`s:${param}`}>검색하기</Link>
            </article>
            <article>
              <Outlet />
            </article>
          </section>
        </>
      }
    </div>
  );
};

export default Groups;
