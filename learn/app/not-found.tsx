import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4">
      <div className="rounded-2xl bg-white p-10 shadow-lg text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>

        <p className="text-gray-600 mb-6">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
