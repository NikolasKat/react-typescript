import { Link } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";
import { RxDotsVertical } from "react-icons/rx";

function TaskElement({ id, comments }) {
   return (
      <div className="border border-solid-black rounded-xl p-5 mt-6">
         <div className="flex items-center text-2xl gap-2">
            <div className="text-white text-4xl bg-slate-400 p-3 rounded-full">
               <FaBookOpen />
            </div>
            <div>
               <Link to={`task/${id}`} className="text-3xl">
                  Task 1
               </Link>
               <h4 className="text-xl">Date of publication</h4>
            </div>
         </div>
         {!comments || comments < 0 ? null : comments > 1 ? (
            <>
               <div className="text-2xl mt-3">
                  <hr />

                  <button className="bg-white">{comments} комментариев</button>
               </div>
            </>
         ) : (
            <>
               <div className="text-2xl mt-3">
                  <hr />
                  <button className="bg-white">1 комментарий</button>
               </div>
            </>
         )}
      </div>
   );
}

export default TaskElement;
