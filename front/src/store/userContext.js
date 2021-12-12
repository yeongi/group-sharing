import React, { useEffect, useState, useMemo } from "react";

const UserCtx = React.createContext({
  // userId: null,
  // sessionId: null,
  user: {},
  isLoggedIn: false,
  onLogIn: () => {},
  onLogOut: () => {},
});

export const UserContextProvider = (props) => {
  //state
  const [user, setUser] = useState({
    isLoggedIn: false,
    num: "",
    name: "",
  });

  //handler
  const onLogInHandler = (user) => {
    setUser(user);
  };

  const onLogOutHandler = () => {
    setUser({
      isLoggedIn: false,
      num: "",
      name: "",
    });
  };

  //객체를 기억하기 위해 캐싱을 한번 함
  const memoValue = useMemo(
    () => ({
      user: user,
      isLoggedIn: user.isLoggedIn,
      onLogIn: onLogInHandler,
      onLogOut: onLogOutHandler,
    }),
    [user]
  );

  return (
    <UserCtx.Provider value={memoValue}>{props.children}</UserCtx.Provider>
  );
};

export default UserCtx;
