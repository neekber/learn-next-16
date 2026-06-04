import registerUser from "@/app/actions/auth/registerUser";

async function RegisterFunction(){ 

    return(
        <>
            <h1>Register</h1>
            <br/>
            <div>
                <form action={registerUser} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
                    <input type="text" name="username" placeholder="Username" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <button type="submit">Register</button>
                </form>
            </div>
        </>
    )
}

export default RegisterFunction;