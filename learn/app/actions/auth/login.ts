'use server';

import { cookies } from "next/headers";
import prisma from "@/app/lib/prisma/prisma";
import bcrypt from "bcrypt";
import { generateToken } from "@/app/lib/jwt/jwt";
import { redirect } from "next/navigation";

export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return {
      success: false,
      error: "User not found",
    };
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return {
      success: false,
      error: "Invalid password",
    };
  }

    const token = generateToken({
    email: user.email,
    username: user.username,
    });

    const cookieStore = await cookies();

    cookieStore.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
    });

    redirect("/");

}