// app/users/page.tsx

'use cache'

import Link from "next/link";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

async function getUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold text-gray-800">
          Users Directory
        </h1>

        <button style={{ marginBottom: "20px" }} className="underline rounded bg-blue-800 px-4 py-2 text-white hover:bg-blue-600">
          <Link href={"/posts"}>Go Post Page</Link>
        </button>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <div
              key={user.id}
              className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Header */}
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-xl font-bold text-white">
                  {user.name.charAt(0)}
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {user.name}
                  </h2>

                  <p className="text-sm text-gray-500">@{user.username}</p>
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  <span className="font-semibold">Email:</span> {user.email}
                </p>

                <p>
                  <span className="font-semibold">Phone:</span> {user.phone}
                </p>

                <p>
                  <span className="font-semibold">Website:</span>{" "}
                  <a
                    href={`https://${user.website}`}
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    {user.website}
                  </a>
                </p>
              </div>

              {/* Address */}
              <div className="mt-5 rounded-xl bg-gray-50 p-4">
                <h3 className="mb-2 font-semibold text-gray-800">Address</h3>

                <p className="text-sm text-gray-600">
                  {user.address.street}, {user.address.suite}
                </p>

                <p className="text-sm text-gray-600">
                  {user.address.city} - {user.address.zipcode}
                </p>
              </div>

              {/* Company */}
              <div className="mt-5 border-t pt-4">
                <h3 className="font-semibold text-gray-800">
                  {user.company.name}
                </h3>

                <p className="mt-1 text-sm italic text-gray-500">
                  "{user.company.catchPhrase}"
                </p>

                <p className="mt-2 text-xs text-gray-400">{user.company.bs}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
