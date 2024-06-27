import { useEffect, useState } from "react";
import UserList, { User } from "../UserList";
import { fetchUsers } from "../../utils";
import UserDetail from "../UserDetail";

export default function UserDashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User>();

  useEffect(() => {
    const getUsers = async () => {
      const users = await fetchUsers(); // Fetch Users
      setUsers(users);
    };

    getUsers();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-8">User Dashboard</h1>
      <div className="flex flex-col md:flex-row">
        <UserList users={users} onSelectUser={setSelectedUser} />
        {selectedUser && <UserDetail user={selectedUser} />}
        {/*Render user details when selectedUser is not empty */}
      </div>
    </div>
  );
}
