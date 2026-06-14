"use client";

import { useActionState } from "react";
import { registerAction } from "@/app/actions/auth/register";

const initialState = {
  success: false,
  message: "",
};

export default function RegisterForm() {
  const [state, formAction, pending] = useActionState(
    registerAction,
    initialState
  );

  return (
    <form action={formAction}>
      <div
        style={{
          margin: "1rem",
          padding: "0.5rem",
          backgroundColor: "gray",
          color: "white",
        }}
      >
        <label>Enter Your email: </label>
        <input
          name="email"
          type="email"
          placeholder="Enter Your email"
          style={{ color: "white" }}
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
        <label>Enter Your username: </label>
        <input
          name="username"
          type="text"
          placeholder="Enter Your username"
          style={{ color: "white" }}
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
        <label>Enter Your password: </label>
        <input
          name="password"
          type="password"
          placeholder="Enter Your password"
          style={{ color: "white" }}
        />
      </div>

      {state.message && (
        <p
          style={{
            color: state.success ? "green" : "red",
          }}
        >
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        style={{
          backgroundColor: "black",
          border: "1px solid black",
          borderRadius: "5px",
          color: "white",
        }}
      >
        {pending ? "Registering..." : "Submit"}
      </button>
    </form>
  );
}
