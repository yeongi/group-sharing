import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserCtx from "../store/userContext";
import { logOutPost } from "../lib/axios";
import classes from "./stylesheet/main.module.css";
import Body from "../layout/Body";

const Main = () => {
  const user = useContext(UserCtx);
  const navigate = useNavigate();

  const logoutHandler = (e) => {
    e.preventDefault();
    user.onLogOut();
    navigate("/");
    logOutPost();
  };

  return (
    <>
      <Body message="메인 페이지">
        <nav>
          <div className={classes["nav-item"]}>
            <Link to="groups">그룹 찾기</Link>
          </div>
          <div className={classes["nav-item"]}>
            {user.isLoggedIn ? (
              <Link to="group">내 그룹 가기</Link>
            ) : (
              <Link to="signUp">로그인 하기</Link>
            )}
            {user.isLoggedIn && (
              <input type="button" value="로그아웃" onClick={logoutHandler} />
            )}
          </div>
        </nav>
      </Body>
    </>
  );
};

export default Main;
