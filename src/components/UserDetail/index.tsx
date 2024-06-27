interface User {
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

interface UserDetailProps {
  user: User;
}

export default function UserDetail({ user }: UserDetailProps) {
  return (
    <div className="md:w-1/3">
      <h2 className="text-xl font-bold mb-2">User Detail</h2>
      <p className="py-3 px-4  font-medium text-gray-600">
        <strong>Name:</strong> {user.name}
      </p>
      <p className="py-3 px-4  font-medium text-gray-600">
        <strong>Username:</strong> {user.username}
      </p>
      <p className="py-3 px-4  font-medium text-gray-600">
        <strong>Email:</strong> {user.email}
      </p>
      <p className="py-3 px-4  font-medium text-gray-600">
        <strong>Address:</strong> {user.address.street}, {user.address.suite},{" "}
        {user.address.city}, {user.address.zipcode}
      </p>
      <p className="py-3 px-4  font-medium text-gray-600">
        <strong>Phone:</strong> {user.phone}
      </p>
      <p className="py-3 px-4  font-medium text-gray-600">
        <strong>Website:</strong> {user.website}
      </p>
      <p className="py-3 px-4  font-medium text-gray-600">
        <strong>Company:</strong> {user.company.name}
      </p>
    </div>
  );
}
