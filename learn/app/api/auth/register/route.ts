import prisma from "@/app/lib/prisma/prisma";

interface RegisterData {
  username: string,
  email: string,
  password: string,
}

export async function registerUser(req: RegisterData): Promise<Response>{
  const data: RegisterData = req;
  const { username, email, password } = data;

  try{
    
    let registerRes = await prisma.user.create({
      data: {
        username: username.trim(),
        email: email.trim(),
        password: password.trim()
      }
    });

    return new Response(JSON.stringify({
      message: "User Register successfully"
    }), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    })

  }catch(error){
    console.log(error)
    return new Response(JSON.stringify({
      message: "registration  failed",
    }), {
      status: 404,
      statusText: "error",
    })
  }
  
}