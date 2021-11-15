import React from "react";
import { Link, Outlet } from "react-router-dom";
import classes from "./stylesheet/group.module.css";

const Groups = () => {
  return (
    <div className={classes["wrapper"]}>
      <h1>그룹 찾기 페이지</h1>
      <section className={classes["group-wrapper"]}>
        <article>
          <h1>그룹 검색하기</h1>
          <p>대충 그룹 나오는 창</p>
          <input type="text" value="검색어를 입력하세요." />
          <input type="submit" value="검색하기" />
        </article>
        <article>
          <Link to="new">새 그룹 만들기</Link>
          <Outlet />
        </article>
      </section>
    </div>
  );
};

export default Groups;
