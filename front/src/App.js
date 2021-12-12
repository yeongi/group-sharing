import { Route, Routes } from "react-router-dom";
import SignUp from "./page/SignUp";
import SignIn from "./page/SignIn";
import Groups from "./page/Groups";
import MakeGroup from "./page/MakeGroup";
import Main from "./page/Main";
import Group from "./page/Group";
import GroupOpen from "./page/GroupOpen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="groups" element={<Groups />}>
        <Route path="make" element={<MakeGroup />} />
        <Route path=":num" element={<GroupOpen />} />
      </Route>
      <Route path="group" element={<Group />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="signIn" element={<SignIn />} />
    </Routes>
  );
}

export default App;
