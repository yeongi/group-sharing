import GroupHeader from "../layout/GroupHeader";
import classes from "../page/stylesheet/main.module.css";

const Group = (props) => {
  return (
    <>
      <GroupHeader message="그룹명" />
      <div className={classes["group-wrapper"]}>
        <div className={classes["share"]}>
          <h1>공유 그룹 목록</h1>
        </div>
        <div className={classes["allpost"]}>
          <h1>전체 게시글</h1>
          <hr />
        </div>
        <div className={classes["post"]}>
          <h1>게시글</h1>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Group;
