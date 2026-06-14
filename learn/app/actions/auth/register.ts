"use server";

import bcrypt from "bcrypt";
import prisma from "@/app/lib/prisma/prisma";
import { generateToken } from "@/app/lib/jwt/jwt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type RegisterState = {
  success: boolean;
  message: string;
};

export const registerAction = async (
  prevState: RegisterState,
  formData: FormData
): Promise<RegisterState> => {
  const email = formData.get("email")?.toString().trim();
  const username = formData.get("username")?.toString().trim();
  const password = formData.get("password")?.toString().trim();

  if (!email || !username || !password) {
    return {
      success: false,
      message: "All fields are required",
    };
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return {
        success: false,
        message: "Email already exists",
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
    });

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
  } catch (error) {
    console.error("Register Error:", error);

    return {
      success: false,
      message: "Something went wrong",
    };
  }

  redirect("/");
};
