'use cache';

import Link from "next/link";
import { notFound } from "next/navigation";

const PostPage = async () => {
  async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.status}`);
    }

    return res.json();
  }

  const data = await getPosts();
  let posts = data;

  notFound();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1
        className="text-4xl font-bold mb-8 text-center"
        style={{ color: "black", fontWeight: "bold" }}
      >
        Latest Posts
      </h1>

      <button
        style={{ marginBottom: "20px", marginRight: "20px" }}
        className="underline rounded bg-blue-800 px-4 py-2 text-white hover:bg-blue-600"
      >
        <Link href={"/posts"}>Refresh Page</Link>
      </button>

      <button
        style={{ marginBottom: "20px" }}
        className="underline rounded bg-blue-800 px-4 py-2 text-white hover:bg-blue-600"
      >
        <Link href={"/users"}>Go to Users Page</Link>
      </button>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: { id: number; title: string; body: string }) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500">Post #{post.id}</span>

              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs">
                User {post.id}
              </span>
            </div>

            <h2 className="text-xl font-semibold mb-3 line-clamp-2 text-gray-800">
              {post.title}
            </h2>

            <p className="text-gray-600 line-clamp-4">{post.body}</p>

            <button className="mt-5 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
