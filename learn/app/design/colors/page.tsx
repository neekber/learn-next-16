export default function ColorsPage(){
    return (
        <div>
  <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>
    Colors
  </h1>

  <p style={{ marginBottom: "16px" }}>
    Explore the color palette used in our design system.
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "16px",
    }}
  >
    <div style={{ background: "#3b82f6", color: "#fff", padding: "16px", borderRadius: "8px" }}>
      Primary
    </div>

    <div style={{ background: "#6b7280", color: "#fff", padding: "16px", borderRadius: "8px" }}>
      Secondary
    </div>

    <div style={{ background: "#f59e0b", color: "#fff", padding: "16px", borderRadius: "8px" }}>
      Accent
    </div>

    <div style={{ background: "#374151", color: "#fff", padding: "16px", borderRadius: "8px" }}>
      Neutral
    </div>
  </div>
</div>
    )
}