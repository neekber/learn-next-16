import RegisterFormComponent from "@/app/components/auth/RegisterForm";
import Link from "next/link";

export default function RegisterPage(){
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
          <h1>Register  Form</h1>

          <br />

          <RegisterFormComponent />

          <p>
            have an account <Link href={"/auth/login"}>Login</Link>
          </p>
        </div>
      </>
    );
}