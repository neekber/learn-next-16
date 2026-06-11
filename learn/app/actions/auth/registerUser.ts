"use server";
import { registerUser as registerUserAPI } from "@/app/api/auth/register/route";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function registerUser(formData: FormData): Promise<void> {
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  let registerRes = await registerUserAPI({username,email,password});
  if(registerRes.status === 201){
    redirect("/auth/login");
  }else{
    redirect("/auth/register");
  }

}
