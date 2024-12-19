import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import SubjectPage from "./pages/SubjectPage";
import TaskPage from "./pages/TaskPage";
import UsersPage from "./pages/UsersPage";
import TaskListPage from "./pages/TaskListPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<Header />}>
               <Route index element={<HomePage />}></Route>
               <Route path="subjects" element={<SubjectPage />}>
                  <Route path="tasklist" element={<TaskListPage />}></Route>
                  <Route path="users" element={<UsersPage />}></Route>
               </Route>
               <Route path="task" element={<TaskPage />}></Route>
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
         </Routes>
      </>
   );
}

export default App;
