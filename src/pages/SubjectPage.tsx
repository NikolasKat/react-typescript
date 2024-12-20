import { Link, Outlet, useParams } from "react-router-dom";

function SubjectPage() {
   const { id } = useParams();
   return (
      <div>
         <header className="flex justify-start gap-9 items-center py-5 pl-9 text-2xl font-medium">
            <Link to="tasklist">Tasks</Link>
            <Link to="users">Users</Link>
         </header>
         <hr />
         <h3>{id}</h3>
         <Outlet />
      </div>
   );
}

export default SubjectPage;
