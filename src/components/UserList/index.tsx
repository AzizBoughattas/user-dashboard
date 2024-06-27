import { useMemo } from "react";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface UserListProps {
  users: User[];
  onSelectUser: (user: User) => void;
}

export default function UserList({ users, onSelectUser }: UserListProps) {
  const userList = useMemo(() => {
    return users.map((user) => (
      <li
        key={user.id}
        onClick={() => onSelectUser(user)}
        className="px-6 py-3 cursor-pointer"
      >
        {user.name}
      </li>
    ));
  }, [users, onSelectUser]);

  return (
    <div className="flex-1 md:w-1/3 mb-4 md:mb-0 md:mr-4">
      <ul className="bg-slate-100 rounded-lg shadow divide-y divide-gray-200 max-w-lg">
        <h2 className="text-xl font-bold mb-5">User List</h2>
        {userList}
      </ul>
    </div>
  );
}
