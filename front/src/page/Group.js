import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useCallback, useContext, useEffect, useState } from "react";
import GroupHeader from "../layout/GroupHeader";
import GrpApi from "../lib/api/Group";
import UserAPI from "../lib/api/UserApi";
import PostAPI from "../lib/api/Post";
import classes from "../page/stylesheet/main.module.css";
import UserCtx from "../store/userContext";
import BasicModal from "../layout/BasicModal";
import { useNavigate } from "react-router-dom";

const Group = (props) => {
  const userctx = useContext(UserCtx);

  const navigater = useNavigate();

  const [curGrp, setGrp] = useState({});
  const [curPost, setPost] = useState({});
  const [isSelected, setSelect] = useState(false);
  const [myGropInfo, setInfo] = useState([]);
  const [share, setShare] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [shareLoading, setShareLoading] = useState(false);
  const [shareGrp, setShareGrp] = useState("");

  const getList = useCallback(async () => {
    setLoading(false);
    setShareLoading(false);
    const result = await UserAPI.getMyGrp(userctx.user.num);
    const data = await result.json();
    setInfo(data.data);
    // eslint-disable-next-line
  }, [isLoading, shareLoading, myGropInfo]);

  const [grpList, setGrpList] = useState([]);

  const getAllGrpList = useCallback(async () => {
    const result = await GrpApi.getGrpAllList();
    const data = await result.json();
    console.log(data);
    setGrpList(data.data);
  }, [grpList]);

  const getShareList = useCallback(
    async (grpnum) => {
      setShareLoading(true);
      const result = await GrpApi.getSharingInfo(grpnum);
      const data = await result.json();
      console.log(data);
      setShare(data.data);
      // eslint-disable-next-line
    },
    [shareLoading, share]
  );

  //게시물 처리
  const [grpPosts, setPostList] = useState([]);
  const [isPostsLoading, setPostsLoading] = useState(false);

  const getGrpPostList = useCallback(
    async (grp_num) => {
      const result = await PostAPI.getGrpNumPost(grp_num);
      const data = await result.json();
      console.log(data);
      setPostList(data.data);
      setPostsLoading(true);
      // eslint-disable-next-line
    },
    [grpPosts, isPostsLoading]
  );

  const getShareGrpPostList = useCallback(
    async (shr) => {
      const result = await PostAPI.getProtectedPost(shr);
      const data = await result.json();
      console.log(data);
      setPostList(data.data);
      setShareLoading(true);
      // eslint-disable-next-line
    },
    [grpPosts, isPostsLoading]
  );

  useEffect(() => {
    getList();
    setLoading(true);
    getAllGrpList();
    setShareLoading(false);
    console.log(myGropInfo);
    // eslint-disable-next-line
  }, []);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("public");
  const [category, setCategory] = useState("");

  const postMakeHandler = async (e) => {
    e.preventDefault();
    const result = await PostAPI.postMyPost({
      user_num: userctx.user.num,
      grp_num: curGrp.grp_num,
      title: title,
      content: content,
      open_type: type,
    });
    const data = await result.json();
    if (data.message === "Success") {
      alert("작성 완료");
    }
  };

  const shareGrpApply = async (e) => {
    e.preventDefault();
    const result = await GrpApi.postStartSharing({
      grp_num1: curGrp.grp_num,
      grp_num2: shareGrp,
    });
    const data = await result.json();
    console.log(data);
    if (data.message === "Success") {
      alert("공유 그룹 완료");
      navigater("/group");
    }
  };

  return (
    <>
      <GroupHeader message="그룹명" />
      <div className={classes["group-wrapper"]}>
        <div className={classes["share"]}>
          <h1>내 그룹 목록</h1>
          <hr />
          {isLoading &&
            myGropInfo.map((grp) => {
              return (
                <>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={(e) => {
                      getShareList(grp.grp_num);
                      getGrpPostList(grp.grp_num);
                      setGrp(grp);
                    }}
                  >
                    {grp.grp_name}
                  </Button>
                  <hr />
                </>
              );
            })}
          {shareLoading && (
            <>
              <h1>
                {curGrp.grp_name} <br />
                공유 그룹 목록
              </h1>
              <hr />
              {isLoading &&
                share.map((grp) => {
                  return (
                    <>
                      <Button
                        variant="contained"
                        size="large"
                        onClick={(e) => {
                          getShareGrpPostList(grp.grp_num);
                        }}
                      >
                        {grp.grp_name}
                      </Button>
                      <hr />
                    </>
                  );
                })}
            </>
          )}
        </div>
        <div className={classes["allpost"]}>
          <h1>
            {curGrp.grp_name}
            <br />
          </h1>
          <hr />
          {isPostsLoading &&
            grpPosts.map((post) => {
              return (
                <div
                  className={classes["apost"]}
                  onClick={(e) => {
                    setPost(post);
                    setSelect(true);
                  }}
                >
                  <p>제목 : {post.title}</p>
                  <p>유형 : {post.open_type}</p>
                  <hr />
                </div>
              );
            })}
          <hr />
        </div>
        <div className={classes["post"]}>
          <div className={classes["post-nav"]}>
            <h1>게시글</h1>
            <p>{curGrp.grp_name}</p>
          </div>
          <div className={classes["post-nav"]}>
            {isPostsLoading && (
              <BasicModal btn_name="게시글 작성">
                <h1>게시글 작성</h1>
                <p>{curGrp.grp_name}</p>
                <hr />
                <form onSubmit={postMakeHandler}>
                  <label>제목 : </label>
                  <TextField
                    required
                    label="제목"
                    variant="outlined"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <br />
                  <label> 내용 : </label>
                  <TextField
                    required
                    label="content"
                    variant="outlined"
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                  />
                  <br />
                  <label> 유형 : </label>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={type}
                      label="유형"
                      onChange={(e) => {
                        setShareGrp(e.target.value);
                      }}
                    >
                      <MenuItem value={"public"}>공개게시물</MenuItem>
                      <MenuItem value={"protected"}>공유게시물</MenuItem>
                      <MenuItem value={"private"}>내부게시물</MenuItem>
                    </Select>
                  </FormControl>
                  <br />

                  <label> 카테고리 : </label>
                  <TextField
                    required
                    label="category"
                    variant="outlined"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                  />
                  <br />
                  <Button variant="contained" type="submit">
                    게시글 작성
                  </Button>
                </form>
              </BasicModal>
            )}
            {isPostsLoading && (
              <BasicModal btn_name="공유그룹 신청하기">
                <h1>공유그룹 신청하기</h1>
                <hr />
                <p>현재 선택한 그룹 : {curGrp.grp_name}</p>
                <label>그룹 선택하기 : </label>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    value={shareGrp}
                    label="그룹"
                    onChange={(e) => {
                      setShareGrp(e.target.value);
                    }}
                  >
                    {grpList.map((grp) => {
                      return (
                        <MenuItem value={grp.grp_num} key={grp.grp_num}>
                          {grp.grp_name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                <hr />
                <br />
                <Button variant="contained" onClick={shareGrpApply}>
                  공유 그룹 신청하기
                </Button>
              </BasicModal>
            )}
          </div>

          <hr />
          {isSelected && (
            <>
              <p>게시글 번호 : {curPost.post_num}</p>
              <h1>제목 : {curPost.title}</h1>
              <hr />
              <p>게시글 내용 : {curPost.content}</p>
              <p>게시글 유형 : {curPost.open_type}</p>
              <p>카테고리 : {curPost.category}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Group;
