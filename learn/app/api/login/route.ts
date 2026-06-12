interface LoginData {
   email: string,
   password: string,
}

export default async function loginActionApi(loginData: LoginData): Promise<Response>{

    console.log(loginData)
    let token =
      "0x25ede47258ad8d047345dee7b7b488ddbac987ab942babf33fa3045d060623b7";

    await new Promise((resolve)=> setTimeout(resolve,2000));

   return new Response(
     JSON.stringify({
       success: true,
       message: "login successfully",
       token
     }),
     {
       status: 201,
     }
   );

}