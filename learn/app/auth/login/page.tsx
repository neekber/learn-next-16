
async function LoginFunction(){ 

    return(
        <>
            <h1>Register</h1>
            <br/>
            <div>
                <form style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    )
}

export default LoginFunction;