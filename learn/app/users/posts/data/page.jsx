

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  return res.json();
}

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  return res.json();
}

export default async function Page() {
  // GOOD ✅
  const usersPromise = getUsers();
  const postsPromise = getPosts();

  const [users, posts] = await Promise.all([usersPromise, postsPromise]);

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Users: {users.length}</p>
      <p>Posts: {posts.length}</p>
    </div>
  );
}
