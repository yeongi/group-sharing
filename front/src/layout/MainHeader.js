import { Avatar, Button } from "@mui/material";
import classes from "../page/stylesheet/main.module.css";
import logo from "../asset/logo.png";
import UserCtx from "../store/userContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const MainHeader = (props) => {
  const userCtx = useContext(UserCtx);

  const logOutHandler = (e) => {
    e.preventDefault();
    userCtx.onLogOut();
  };
  console.log(userCtx.isLoggedIn);
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
          {!userCtx.isLoggedIn && (
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
          {userCtx.isLoggedIn && (
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
