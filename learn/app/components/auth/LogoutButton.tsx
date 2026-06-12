"use client";

import logoutAction from "@/app/actions/auth/logout";

export default function LogoutButton() {
  return (
    <>
      <button style={{cursor: "pointer"}} onClick={logoutAction}>Logout</button>
    </>
  );
}
