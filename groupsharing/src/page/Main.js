import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserCtx from "../store/userContext";
import { logOutPost } from "../lib/axios";

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
      <div>
        <header>
          <p>메인 홈페이지</p>
          <nav>
            <ul>
              <Link to="groups">그룹 찾기</Link>
            </ul>
            <ul>
              {user.isLoggedIn ? (
                <Link to="group">내 그룹 가기</Link>
              ) : (
                <Link to="signUp">로그인 하기</Link>
              )}
            </ul>
            {user.isLoggedIn ?? (
              <input type="button" value="로그아웃" onClick={logoutHandler} />
            )}
          </nav>
        </header>
      </div>
    </>
  );
};

export default Main;
