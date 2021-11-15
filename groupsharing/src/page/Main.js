import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <>
        <div>
          <header>
            <p>메인 홈페이지</p>
            <nav>
              <ul>
                <Link to="groups">그룹 찾기</Link>
              </ul>
              <ul>
                <Link to="signUp">로그인 하기</Link>
              </ul>
            </nav>
          </header>
        </div>
      </>
    </>
  );
};

export default Main;
