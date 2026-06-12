import Link from "next/link"
import LogoutButton from "./auth/LogoutButton";
import isLogedIn from "@/app/actions/auth/isLoged";

export default async function Pages(){

    let isLogedInRes = await isLogedIn();

    return (
      <div className="w-1/4 h-screen bg-gray-200 p-4">
        <h2 className="text-xl font-bold mb-4">Sidebar</h2>
        <ul>
          <li className="mb-2">
            <Link href={"/"} className="text-blue-500 hover:underline">
              Home
            </Link>
          </li>
          <li className="mb-2">
            <Link href={"dashboard"} className="text-blue-500 hover:underline">
              Profile
            </Link>
          </li>
          <li className="mb-2">
            <Link href={"settings"} className="text-blue-500 hover:underline">
              Settings
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href={"/auth/login"}
              className="text-blue-500 hover:underline"
            >
              Login
            </Link>
          </li>

          <li className="mb-2">{ !isLogedInRes ? "" : <LogoutButton /> }</li>
        </ul>
      </div>
    );
}