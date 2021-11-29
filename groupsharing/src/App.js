import { Route, Routes } from "react-router-dom";
import SignUp from "./page/SignUp";
import SignIn from "./page/SignIn";
import Groups from "./page/Groups";
import Main from "./page/Main";
import SearchGroup from "./page/SearchGroup";
import SearchResult from "./page/SearchResult";
import Group from "./page/Group";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="groups" element={<SearchGroup />}>
        <Route path="s:num" element={<SearchResult />} />
      </Route>
      <Route path="group" element={<Group />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="signIn" element={<SignIn />} />
    </Routes>
  );
}

export default App;
