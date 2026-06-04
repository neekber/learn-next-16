"use server";

import { revalidatePath } from "next/cache";

export default async function registerUser(formData: FormData): Promise<void> {
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  console.log(password);

  await new Promise((resolve) => setTimeout(resolve, 5000));

  console.log({
    success: true,
    message: "User registered successfully!",
    data: { username, email },
  });

}
