import React, { useCallback, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import classes from "./stylesheet/group.module.css";
import Header from "../layout/Header";
import { Button, TextField } from "@mui/material";
import GrpApi from "../lib/api/Group";

const Groups = () => {
  const [param, setParam] = useState("");
  const navigator = useNavigate();

  const onChangeParamHandler = (e) => {
    setParam(e.target.value);
  };

  const [grpList, setGrp] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getList = useCallback(async () => {
    const result = await GrpApi.getGrpList();
    const data = await result.json();
    console.log(data);
    setGrp(data.data);
  }, [grpList, isLoading]);

  const searchHandler = () => {
    getList();
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
              <Button variant="contained" size="large" onClick={searchHandler}>
                검색하기
              </Button>
              <hr />
              {isLoading && <div>그룹 검색 결과 나열</div>}
              {!isLoading &&
                grpList.map((g) => {
                  return (
                    <div key={g.grp_num}>
                      <p>그룹명 : {g.grp_name}</p>
                      <p>그룹번호 : {g.grp_num}</p>
                      <p>관심사 번호 : {g.interest_num}</p>
                      <Link to={`${g.grp_num}`}>게시물 보기</Link>
                      <hr />
                    </div>
                  );
                })}
            </article>
            <article className={classes["result"]}>
              <Outlet />
            </article>
          </section>
        </>
      </div>
    </>
  );
};

export default Groups;
