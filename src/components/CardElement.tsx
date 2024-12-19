import { RxDotsVertical } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

function CardElement({ id }) {
   return (
      //   <Link to="subject">
      <div className="relative flex flex-col justify-between w-[350px] min-h-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
         <div className="p-5 bg-red-200">
            <div className="flex justify-between items-center">
               <Link to={`subject/${id}`}>
                  <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
                     Subject name
                  </h5>
               </Link>
               <button className="text-2xl rounded-full p-2 bg-red-200 hover:bg-red-100 focus:bg-red-100">
                  <RxDotsVertical />
               </button>
            </div>
            <Link to={`subject/${id}`}>
               <h6 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
                  Teacher`s name
               </h6>
            </Link>
         </div>
         <div>
            <hr />
            <div className="flex justify-end p-2">
               <button className="text-2xl bg-white p-3 rounded-full hover:bg-slate-100 focus:bg-slate-100">
                  <FaRegUser />
               </button>
            </div>
         </div>
         <div className="absolute z-10 bg-amber-800 w-[80px] h-[80px] flex justify-center items-center text-white text-5xl right-3 top-20 rounded-full">
            K
         </div>
      </div>
      //   </Link>
   );
}

export default CardElement;
