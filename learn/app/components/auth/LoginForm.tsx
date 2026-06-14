'use client';

import {loginAction} from "@/app/actions/auth/login";
import { useActionState } from "react";

const initialState = {
  success: false,
  error: null,
}

export default function LoginForm(){

  const [state, formAction, pending] = useActionState(
    loginAction,
    initialState
  );

    return (
      <>
        <form action={formAction}>
          <div
            style={{
              margin: "1rem",
              padding: "0.5rem",
              backgroundColor: "gray",
              color: "white",
            }}
          >
            <label htmlFor="">Enter Your email: </label>
            <input
              style={{ color: "white" }}
              type="email"
              name="email"
              placeholder="Enter YOur email"
            />
          </div>
          <div
            style={{
              margin: "1rem",
              padding: "0.5rem",
              backgroundColor: "gray",
              color: "white",
            }}
          >
            <label htmlFor="">Enter Your password: </label>
            <input
              style={{ color: "white" }}
              type="password"
              name="password"
              placeholder="Enter YOur password"
            />
          </div>

          <button
            style={{
              backgroundColor: "black",
              border: "1px solid black",
              borderRadius: "5px",
              color: "white",
            }}
            disabled={pending}
            type="submit"
          >
            {pending ? "Logging in..." : "Login"}
          </button>

          {state.error && <p style={{ color: "red" }}>{state.error}</p>}
          
        </form>
      </>
    );
}