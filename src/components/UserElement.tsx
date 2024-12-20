import { FC } from "react";

type UserData = {
   userName: string;
   img?: string;
};

const UserListElement: FC<UserData> = ({ userName, img }) => {
   return (
      <div
         className="flex items-center gap-3 text-3xl
      "
      >
         {img ? (
            <img src={img} alt="user icon" />
         ) : (
            <div className="bg-amber-800 w-[60px] h-[60px] flex justify-center items-center text-white text-3xl right-3 top-20 rounded-full">
               {userName.slice(0, 1)}
            </div>
         )}
         <h3>{userName}</h3>
      </div>
   );
};

export default UserListElement;
