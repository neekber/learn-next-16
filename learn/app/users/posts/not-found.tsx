'use client'

import { usePathname } from "next/navigation";

export default function NotFound() {

  let pathName = usePathname();


  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4">
      <div className="rounded-2xl bg-white p-10 shadow-lg text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>

        <p className="text-gray-600 mb-6">
          Not Found Page for Posts Route, and coustom notFound function implemented: Path: {pathName}
        </p>

      </div>
    </div>
  );
}
