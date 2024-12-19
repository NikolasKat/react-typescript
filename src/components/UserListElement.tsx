import { FC } from "react";

type UserData = {
   userName: string;
   img?: string;
};

const UserListElement: FC<UserData> = ({ userName, img }) => {
   return (
      <div
         className="flex items-center gap-3
      "
      >
         {img ? (
            <img src={img} alt="user icon" />
         ) : (
            <div className="bg-amber-800 w-[50px] h-[50px] flex justify-center items-center text-white text-3xl right-3 top-20 rounded-full">
               {userName.slice(0, 1)}
            </div>
         )}
         <h3 className="text-2xl">{userName}</h3>
      </div>
   );
};

export default UserListElement;
