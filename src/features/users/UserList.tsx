import React from "react";

const UserList = () => {
  const users = [];
  const renderUsers = () => {
    return <div>Users Here</div>;
  };
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
