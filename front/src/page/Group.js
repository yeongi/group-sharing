import { useCallback, useContext, useEffect, useState } from "react";
import GroupHeader from "../layout/GroupHeader";
import GrpApi from "../lib/api/Group";
import UserAPI from "../lib/api/UserApi";
import classes from "../page/stylesheet/main.module.css";
import UserCtx from "../store/userContext";

const Group = (props) => {
  const userctx = useContext(UserCtx);

  const [myGrpArr, setArr] = useState([]);
  const [myGropInfo, setInfo] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const myGrp = useCallback(async () => {
    const result = await UserAPI.getMyGrp(userctx.user.num);
    const data = await result.json();
    console.log(data);
    setArr(data.data);
  });

  const getList = useCallback(async () => {
    setLoading(false);
    const result = await Promise.all(
      myGrpArr.map((grp) => {
        const result = GrpApi.getMyGrpInfo(grp.grp_num);
        return result;
        // console.log(data);
        // setInfo(myGropInfo.concat(data.data));
      })
    );
    const data = await Promise.all(
      result.map((res) => {
        return res.json();
      })
    );
    setInfo(data);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    myGrp();
    getList();
    console.log(myGropInfo);
    setLoading(true);
    // eslint-disable-next-line
  }, []);

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
