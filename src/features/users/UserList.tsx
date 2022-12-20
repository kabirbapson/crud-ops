import React from "react";

const UserList = () => {
  const users = [
    { id: 1, name: "Musa Zazzau", email: "musa@email.com" },
    { id: 2, name: "Kafi Zabuwa", email: "zabuwa@email.com" },
  ];
  const renderUsers = () =>
    users.map((user) => (
      <div
        className="bg-gray-300 p-5 flex items-center justify-between"
        key={user.id}
      >
        <div>
          <h3 className="font-bold text-lg text-gray-700 ">{user.name} </h3>
          <span className="font-normal text-gray-700 "> {user.email} </span>
        </div>
        <div className="" >
        
        </div>
      </div>
    ));
  return (
    <div className="grid gap-5 md:grid-cols-2 ">
      {users.length ? (
        renderUsers()
      ) : (
        <p className="text-center col-span-2 text-gray-700 font-semibold">
          No Users
        </p>
      )}
    </div>
  );
};

export default UserList;
