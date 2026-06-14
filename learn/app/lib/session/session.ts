import { cookies } from "next/headers";

export const isLogedIn = async (): Promise<boolean> =>{

  let cookieStore = await cookies();
  let token = await cookieStore.get('token')?.value;

  if(!token) return false;
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
