import { Avatar, Button } from "@mui/material";
import classes from "../page/stylesheet/main.module.css";
import logo from "../asset/logo.png";

const MainHeader = (props) => {
  return (
    <header>
      <div className={classes["header-wrapper"]}>
        <Avatar
          alt=""
          src={logo}
          variant="rounded"
          sx={{ width: 200, height: 120 }}
        />
        <h1>{props.message}</h1>
        <div>
          <Button>SignIn</Button>
          <Button>SignUp</Button>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
