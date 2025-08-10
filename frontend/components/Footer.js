export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "2rem 3rem",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        fontSize: "0.9rem",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "4rem",
          flex: "1 1 60%",
          minWidth: "300px",
          marginBottom: "1.5rem",
        }}
      >
        <div>
          <h4 style={{ marginBottom: "1rem", fontWeight: "bold" }}>Company</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li>About Us</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ marginBottom: "1rem", fontWeight: "bold" }}>Contact</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li>Help and Support</li>
            <li>Partner With Us</li>
            <li>Ride With Us</li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: "1rem", fontWeight: "bold" }}>Legal</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li>Terms and Conditions</li>
            <li>Refund and Cancellations</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>

      <div
        style={{
          flex: "1 1 30%",
          minWidth: "200px",
          marginBottom: "1.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <h4 style={{ marginBottom: "1rem", fontWeight: "bold" }}>Follow Us</h4>
        <div style={{ display: "flex", gap: "1rem" }}>
          <span style={{ cursor: "pointer" }}>🐦 Twitter</span>
          <span style={{ cursor: "pointer" }}>📘 Facebook</span>
          <span style={{ cursor: "pointer" }}>📸 Instagram</span>
          <span style={{ cursor: "pointer" }}>💼 LinkedIn</span>
        </div>
      </div>
    </footer>
  );
}
