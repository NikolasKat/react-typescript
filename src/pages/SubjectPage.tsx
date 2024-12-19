import { Link, Outlet, useParams } from "react-router-dom";

function SubjectPage() {
   const { id } = useParams();
   return (
      <div>
         <header className="flex justify-start gap-9 items-center px-9 py-4 text-xl font-medium">
            <Link to="tasklist">Задания</Link>
            <Link to="users">Пользователи</Link>
         </header>
         <h3>{id}</h3>
         <hr />
         <Outlet />
      </div>
   );
}

export default SubjectPage;
