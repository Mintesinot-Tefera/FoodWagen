export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#fff",
        padding: "0.5rem 1rem", 
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)", 
        fontSize: "0.9rem", 
      }}
    >
      <div style={{ fontWeight: "bold", color: "#000" }}>
        FoodWagen
      </div>

      <button
        style={{
          backgroundColor: "#FFD700",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          padding: "0.3rem 1rem",
          fontWeight: "bold",
          cursor: "pointer",
          fontSize: "0.9rem", 
        }}
        onClick={() => alert("Meal button clicked!")}
      >
        Add Meal
      </button>
    </header>
  );
}
