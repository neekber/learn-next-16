import LoginFormComponent from "@/app/components/auth/LoginForm";
import Link from "next/link";

export default function LoginPage(){
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <h1>Login Form</h1>

          <br />

          <LoginFormComponent />

          <p>
            Don't have an account <Link href={"/auth/register"}>Register</Link>
          </p>
        </div>
      </>
    );
}