import { Link, Outlet } from "react-router-dom";
import { useState, FC } from "react";

import { RxHamburgerMenu, RxPlus } from "react-icons/rx";

function Header() {
   const [isClicked, setIsClicked] = useState<boolean>(false);
   return (
      <>
         <header className="flex justify-between items-center px-9 py-4 text-xl font-medium">
            <div className="flex items-center gap-9">
               {/* <button>
                  <RxHamburgerMenu />
               </button> */}
               <Link
                  to="/"
                  className="flex justify-items-start items-center gap-2"
               >
                  <img
                     src="https://www.gstatic.com/classroom/logo_square_rounded.svg"
                     alt="Home Page"
                     className="w-16"
                  />
                  <h2>Главная страница</h2>
               </Link>
               {/* <Link to="subject">SubjectPage</Link> */}
            </div>
            {/* <Link to="task">TaskPage</Link> */}
            <div className="relative">
               <button
                  className="text-3xl bg-slate-100 rounded-3xl p-3"
                  onClick={() => {
                     setIsClicked((isCliked) => !isClicked);
                  }}
               >
                  <RxPlus />
               </button>
               {isClicked ? (
                  <div className="absolute right-0 top-16 bg-white z-20 p-4 border border-solid border-gray-200">
                     <ul className="text-2xl">
                        <button className="bg-white mb-2">
                           Присоединиться
                        </button>
                        <button className="bg-white">Создать курс</button>
                     </ul>
                  </div>
               ) : null}
            </div>
         </header>
         <hr />
         <Outlet />
      </>
   );
}

export default Header;