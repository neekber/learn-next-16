export default function TypographyPage() {
    return (
        <div>
  <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>
    Typography
  </h1>

  <p style={{ marginBottom: "16px" }}>
    Discover the typography styles used in our design system.
  </p>

  <div style={{ display: "grid", gap: "16px" }}>
    <div>
      <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>Heading 1</h2>
      <p style={{ fontSize: "16px" }}>This is a sample paragraph for Heading 1.</p>
    </div>

    <div>
      <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>Heading 2</h2>
      <p style={{ fontSize: "14px" }}>This is a sample paragraph for Heading 2.</p>
    </div>

    <div>
      <h2 style={{ fontSize: "16px", fontWeight: "bold" }}>Heading 3</h2>
      <p style={{ fontSize: "12px" }}>This is a sample paragraph for Heading 3.</p>
    </div>
  </div>
</div>
    )
}