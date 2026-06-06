export function GET(request: Request) {
  return new Response(
    JSON.stringify({
      message: "User registered successfully",
    }),
    {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}