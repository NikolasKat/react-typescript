import { RxDotsVertical } from "react-icons/rx";
import { FaRegUser, FaRegFolderOpen } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FC } from "react";

interface SubjectCardData {
   id: string | number;
   subjectName: string;
   teachersName: string;
}

const CardElement: FC<SubjectCardData> = ({
   id,
   subjectName,
   teachersName,
}) => {
   return (
      <div className="relative flex flex-col justify-between w-[400px] min-h-[350px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
         <div className="p-5 pb-8 bg-red-200">
            <div className="flex justify-between items-center">
               <Link to={`subject/${id}`}>
                  <h5 className="mb-2 text-3xl font-medium tracking-tight text-gray-900 dark:text-white">
                     {subjectName}
                  </h5>
               </Link>
               <button className="text-2xl rounded-full p-3 bg-red-200 hover:bg-red-100 focus:bg-red-100">
                  <RxDotsVertical />
               </button>
            </div>
            <Link to={`subject/${id}`}>
               <h6 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
                  {teachersName}
               </h6>
            </Link>
         </div>
         <div>
            <hr />
            <div className="flex justify-end p-2 gap-4">
               <button className="text-3xl bg-white p-3 rounded-full hover:bg-slate-100 focus:bg-slate-100">
                  <FaRegUser />
               </button>
               <button className="text-3xl bg-white p-3 rounded-full hover:bg-slate-100 focus:bg-slate-100">
                  <FaRegFolderOpen />
               </button>
            </div>
         </div>
         <div className="absolute z-10 bg-amber-800 w-[100px] h-[100px] flex justify-center items-center text-white text-5xl right-3 top-20 rounded-full">
            {teachersName.slice(0, 1)}
         </div>
      </div>
   );
};

export default CardElement;
