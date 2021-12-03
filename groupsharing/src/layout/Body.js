import classes from "../page/stylesheet/main.module.css";
import MainHeader from "./MainHeader";

const Body = (props) => {
  return (
    <div className={classes.wrapper}>
      <MainHeader message={props.message} />
      <div className={classes["nav-wrapper"]}>{props.children}</div>
    </div>
  );
};

export default Body;
