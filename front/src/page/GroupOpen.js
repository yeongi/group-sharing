import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BasicModal from "../layout/BasicModal";
import PostAPI from "../lib/api/Post";
import GroupApply from "./form/GroupApply";

const GroupOpen = (props) => {
  const { num } = useParams();

  const [openPosts, setList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getList = useCallback(async () => {
    setLoading(false);
    const result = await PostAPI.getGrpPublicList(num);
    const data = await result.json();
    console.log(data);
    setList(data.data);
    // eslint-disable-next-line
  }, [num, isLoading]);

  useEffect(() => {
    getList();
    setLoading(true);
    // eslint-disable-next-line
  }, [getList]);

  return (
    <div>
      <h1>그룹 공개 게시물</h1>
      {isLoading && (
        <BasicModal btn_name="그룹 가입 신청">
          <GroupApply grpnum={num} />
        </BasicModal>
      )}

      <hr />
      {isLoading &&
        openPosts.map((e) => {
          return (
            <div key={e.post_num}>
              <h1>제목 : {e.title}</h1>
              <p>
                공개 유형 : {e.open_type} / 글 번호:{e.post_num}{" "}
              </p>
              <p>내용 : {e.content}</p>
            </div>
          );
        })}
    </div>
  );
};

export default GroupOpen;
