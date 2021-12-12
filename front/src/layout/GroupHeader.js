import { Avatar, Button } from "@mui/material";
import classes from "../page/stylesheet/main.module.css";
import logo from "../asset/logo.png";
import { useNavigate } from "react-router-dom";

const GroupHeader = (props) => {
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
        <p>그룹 정보</p>
      </div>
    </header>
  );
};

export default GroupHeader;
