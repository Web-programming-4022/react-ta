import { useEffect, useState } from "react";

const AllUsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await fetch("http://127.0.0.1:8000/users", {
        method: "GET",
        // headers: {
        //   "Content-Type": "application/json",
        // },
      }).then((res) => res.json().then((data) => setUsers(data)));
    }
    loadUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div>{user.username}</div>
      ))}
    </div>
  );
};

export default AllUsersPage;
