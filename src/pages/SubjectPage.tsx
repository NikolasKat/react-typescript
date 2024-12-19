import { Link, Outlet } from "react-router-dom";

function SubjectPage() {
   return (
      <div>
         <header className="flex justify-start gap-9 items-center px-9 py-4 text-xl font-medium">
            <Link to="tasklist">Задания</Link>
            <Link to="users">Пользователи</Link>
         </header>
         <hr />
         <Outlet />
      </div>
   );
}

export default SubjectPage;
