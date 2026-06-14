"use server";

import bcrypt from "bcrypt";
import prisma from "@/app/lib/prisma/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { generateToken } from "@/app/lib/jwt/jwt";

type LoginState = {
  success: boolean;
  error: string;
};

export async function loginAction(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = formData.get("email")?.toString().trim();
  const password = formData.get("password")?.toString().trim();

  if (!email || !password) {
    return {
      success: false,
      error: "Email and password are required",
    };
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return {
        success: false,
        error: "User not found",
      };
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return {
        success: false,
        error: "Invalid password",
      };
    }

    const token = generateToken({
      id: user.id,
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
  } catch (error) {
    console.error("Login Error:", error);

    return {
      success: false,
      error: "Something went wrong",
    };
  }

  redirect("/");
}
