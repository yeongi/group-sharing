import classes from "./stylesheet/newgroup.module.css";

const NewGroup = () => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes}>새로운 그룹 만들기</h1>
      <p>그룹을 만들 수 있는 페이지</p>
    </div>
  );
};

export default NewGroup;
