import classes from "../page/stylesheet/main.module.css";

const Body = (props) => {
  return (
    <div className={classes.wrapper}>
      <header>
        <h1>{props.message}</h1>
      </header>
      <div className={classes["nav-wrapper"]}>{props.children}</div>
    </div>
  );
};

export default Body;
