import UserElement from "./UserElement";

function UserList() {
   return (
      <ul className="flex flex-col gap-5">
         <UserElement userName="Kotovenko Nikolai" key={1} />
         <UserElement userName="Kotovenko Nikolai" key={1} />
         <UserElement userName="Kotovenko Nikolai" key={1} />
         <UserElement userName="Kotovenko Nikolai" key={1} />
         <UserElement userName="Kotovenko Nikolai" key={1} />
         <UserElement userName="Kotovenko Nikolai" key={1} />
         <UserElement userName="Kotovenko Nikolai" key={1} />
      </ul>
   );
}

export default UserList;
