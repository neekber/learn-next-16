  import prisma from "@/app/lib/prisma/prisma";

  
  async function fetchData(){
    const users = await prisma.user.findMany();
    console.log(users);
    await new Promise((resolve) => setTimeout(resolve,2000));
    return users;
    }


export default async function PostsPage() {
  const users = await fetchData()

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>

      <div className="space-y-4">
        {users.map((user: { id: number; username: string; email: string }) => (
          <div
            key={user.id}
            className="border rounded-xl p-4 shadow-sm"
          >
            <h2 className="text-xl font-semibold">{user.username}</h2>
            <p className="text-gray-600 mt-2">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}