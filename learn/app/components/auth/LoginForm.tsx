'use client';

import loginAction from "@/app/actions/auth/login";

export default function LoginForm(){
    return (
      <>
        <form action={loginAction}>
          <div style={{margin: "1rem", padding: "0.5rem", backgroundColor: "gray", color: "white"}}>
            <label htmlFor="">Enter Your email: </label>
            <input style={{color: "white"}} type="email" name="email" placeholder="Enter YOur email" />
          </div>
          <div style={{margin: "1rem", padding: "0.5rem", backgroundColor: "gray", color: "white"}}>
            <label htmlFor="">Enter Your password: </label>
            <input style={{color: "white"}} type="password" name="password" placeholder="Enter YOur password" />
          </div>

         <button style={{backgroundColor: "black", border: "1px solid black", borderRadius: "5px", color: "white"}} type="submit">Submit</button>
        </form>
      </>
    );
}