import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserCtx from "../store/userContext";
import classes from "./stylesheet/main.module.css";
import Body from "../layout/Body";

const Main = () => {
  const userCtx = useContext(UserCtx);

  return (
    <>
      <Body message="메인 페이지">
        <section>
          <div className={classes["nav-item"]}>
            <h1>그룹을 검색하세요.</h1>
            <Link to="groups">그룹 찾기</Link>
          </div>
          <div className={classes["nav-item"]}>
            {userCtx.isLoggedIn ? (
              <h1>내 그룹에서 활동하세요.</h1>
            ) : (
              <h1>로그인을 통해서 그룹에 가입 하세요.</h1>
            )}
            {userCtx.isLoggedIn ? (
              <Link to="group">내 그룹 가기</Link>
            ) : (
              <Link to="signUp">로그인 하기</Link>
            )}
          </div>
        </section>
      </Body>
    </>
  );
};

export default Main;
