import { Metadata } from "next";

// dynamic metadata with params ==========
async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 3600 }, // Optional caching
  });

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body.slice(0, 150),
  };
}

export default function MetadataPage() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Metadata Example</h1>
      <p className="mb-4">
        This page demonstrates how to define metadata for a Next.js page.
      </p>
      <div className="border p-4 rounded">
        <h2 className="text-xl font-semibold mb-2">Page Metadata</h2>
        <p className="mb-2">
          The metadata for this page is defined in the `metadata` export at the
          top of this file.
        </p>
        <p className="mb-2">
          You can view the metadata in the browser's developer tools under the
          "Elements" tab, where you will find the title and description tags.
        </p>
      </div>
    </>
  );
}
