"use server";

import { isLogedIn as checkIsLogedIn } from "@/app/lib/session/session";

export default async function isLogedIn(){

    let isLogedIn = await checkIsLogedIn();
    return isLogedIn;

}