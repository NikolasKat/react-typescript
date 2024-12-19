import { useParams } from "react-router-dom";

function TaskPage() {
   const { id } = useParams();

   return (
      <div>
         <h2>Task Page {id}</h2>
      </div>
   );
}

export default TaskPage;
