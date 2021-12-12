import { Avatar, Button } from "@mui/material";
import classes from "../page/stylesheet/main.module.css";
import logo from "../asset/logo.png";
import UserCtx from "../store/userContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LogHandler from "../lib/handler/Login";

const MainHeader = (props) => {
  const user = useContext(UserCtx);

  const logOutHandler = (e) => {
    e.preventDefault();
    const result = LogHandler.logOut(user);
    console.log(result);
  };

  const navigate = useNavigate();

  return (
    <header>
      <div className={classes["header-wrapper"]}>
        <Avatar
          alt=""
          src={logo}
          variant="rounded"
          sx={{ width: 200, height: 120 }}
          onClick={(e) => {
            navigate("/");
          }}
        />
        <h1>{props.message}</h1>
        <div>
          {!user.isLoggedIn && (
            <>
              <Button
                onClick={(e) => {
                  navigate("/signIn");
                }}
                variant="contained"
                size="large"
              >
                SignIn
              </Button>
              <Button
                onClick={(e) => {
                  navigate("/signUp");
                }}
                variant="contained"
                size="large"
              >
                SignUp
              </Button>
            </>
          )}
          {user.isLoggedIn && (
            <>
              <Button
                variant="contained"
                size="large"
                onClick={(e) => {
                  navigate("group");
                }}
              >
                MyGruop
              </Button>
              <Button onClick={logOutHandler} variant="contained" size="large">
                Log out
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
