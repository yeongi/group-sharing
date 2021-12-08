import { useState } from "react";
import Groups from "./Groups";
import NewGroup from "./NewGroup";

const SearchGroup = () => {
  const [isClickMaking, setIsClick] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsClick(true);
        }}
      >
        그룹 만들기
      </button>
      {!isClickMaking && <Groups />}
      {isClickMaking && <NewGroup />}
      {isClickMaking && (
        <button
          onClick={() => {
            setIsClick(false);
          }}
        >
          나가기
        </button>
      )}
    </>
  );
};

export default SearchGroup;
