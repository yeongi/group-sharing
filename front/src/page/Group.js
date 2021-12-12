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

const Group = (props) => {
  const userctx = useContext(UserCtx);

  const [curGrp, setGrp] = useState({});
  const [curPost, setPost] = useState({});
  const [isSelected, setSelect] = useState(false);
  const [myGropInfo, setInfo] = useState([]);
  const [share, setShare] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [shareLoading, setShareLoading] = useState(false);

  const getList = useCallback(async () => {
    setLoading(false);
    setShareLoading(false);
    const result = await UserAPI.getMyGrp(userctx.user.num);
    const data = await result.json();
    setInfo(data.data);
    // eslint-disable-next-line
  }, [isLoading, shareLoading, myGropInfo]);

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
    async (grp_num) => {
      const result = await PostAPI.getProtectedPost(grp_num);
      const data = await result.json();
      console.log(data);
      setPostList(data.data);
      setPostsLoading(true);
      // eslint-disable-next-line
    },
    [grpPosts, isPostsLoading]
  );

  useEffect(() => {
    getList();
    setLoading(true);
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
                          setGrp(grp);
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
          <h1>게시글</h1>
          <p>{curGrp.grp_name}</p>
          {isPostsLoading && (
            <BasicModal btn_name="게시글 작성">
              <h1>게시글 작성</h1>
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
                      setType(e.target.value);
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
