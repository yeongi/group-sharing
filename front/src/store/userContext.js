import React, { useEffect, useState, useMemo } from "react";

const UserCtx = React.createContext({
  // userId: null,
  // sessionId: null,
  isLoggedIn: false,
  onLogIn: () => {},
  onLogOut: () => {},
});

export const UserContextProvider = (props) => {
  //state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //handler
  const onLogInHandler = () => {
    setIsLoggedIn(true);
  };

  const onLogOutHandler = () => {
    setIsLoggedIn(false);
  };

  //네트워크 통신 해서 인증
  useEffect(() => {}, []);

  //객체를 기억하기 위해 캐싱을 한번 함
  const memoValue = useMemo(
    () => ({
      isLoggedIn: isLoggedIn,
      onLogIn: onLogInHandler,
      onLogOut: onLogOutHandler,
    }),
    [isLoggedIn]
  );

  return (
    <UserCtx.Provider value={memoValue}>{props.children}</UserCtx.Provider>
  );
};

export default UserCtx;
