import { logOutPost } from "../axios";

const LogHandler = {
  logOut: async (userCtx) => {
    userCtx.onLogOut();
    // const result = await logOutPost();
    // const data = await result.json();
    return;
  },
};

export default LogHandler;
