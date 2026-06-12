"use server";

import { logout } from "@/app/lib/session/session";
import { redirect } from "next/navigation";

export default async function logoutAction() {

  let logoutRes = await logout();
  if(logoutRes){
    redirect("/auth/login");
  }

}