
async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch posts')
  }

  return res.json()
}

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>

      <div className="space-y-4">
        {posts.slice(0, 10).map((post: { id: number; title: string; body: string }) => (
          <div
            key={post.id}
            className="border rounded-xl p-4 shadow-sm"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}