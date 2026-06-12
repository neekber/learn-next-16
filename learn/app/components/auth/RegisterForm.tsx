"use client";

export default function RegisterForm() {
  return (
    <>
      <form action="">
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
          <label htmlFor="">Enter Your username: </label>
          <input
            style={{ color: "white" }}
            type="text"
            placeholder="Enter YOur username"
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
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}
