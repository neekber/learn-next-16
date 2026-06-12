import { cookies } from "next/headers";

export const isLogedIn = async (): Promise<boolean | null> =>{

  let cookieStore = await cookies();
  let token = await cookieStore.get('token')?.value;

  if(!token) return null;
  return true;

}

export async function logout() {

  const cookieStore = await cookies();

  try {
     await cookieStore.delete("token");
     return true;
  } catch (error) {
     return false;
  }

}
