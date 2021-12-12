import React from "react";
import { Link, useNavigate } from "react-router-dom";

const MakeGroup = () => {
  return (
    <div>
      <h1>그룹 만들기</h1>
      <Link to="/groups">나가기</Link>
    </div>
  );
};

export default MakeGroup;
