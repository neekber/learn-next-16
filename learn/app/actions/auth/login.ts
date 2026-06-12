"use server"

import loginActionApi from "@/app/api/login/route";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function loginAction(FormData: FormData) {
 
    let email = (FormData.get('email') as string).trim();
    let password = (FormData.get('password') as string).trim();
    
    let loginRes = await loginActionApi({email,password});
    let data = await loginRes.json();

    let cookieStore = await cookies();

    if(loginRes.ok){
        
        cookieStore.set('token', data.token,{
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: "/",
            maxAge: 60 * 60 * 24 * 30
        });

        redirect("/");

    }

}