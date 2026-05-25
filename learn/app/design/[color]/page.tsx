const getColor = async ({params}:{params:Promise<{color:String}>}) => {

    let {color} = await params;

    return (
        <div>
            <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>
                Get Color From Dynamic Route
            </h1>

            <p style={{ marginBottom: "16px" }}>
                Choose a color from our palette to use in your design.
            </p>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "16px",
                }}
            >
                <div style={{ backgroundColor: `${color}`, color: "#fff", padding: "16px", borderRadius: "8px" }}>
                    {color}
                </div>

            </div>
        </div>
    )
}

export default getColor;