'use client'
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  // const [foods, setFoods] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("http://localhost:5000/api/foods")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setFoods(data);
  //       setLoading(false);
  //     })
  //     .catch(() => setLoading(false));
  // }, []);

  // if (loading) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <main style={{ padding: "2rem" }}>
        <h1 style={{ marginBottom: "1.5rem" }}>Food List</h1>
        {/* <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
            gap: "1.5rem",
          }}
        >
          {foods.map((food) => (
            <div
              key={food._id || food.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "1rem",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={food.foodimage || "/placeholder.png"}
                alt={food.foodname}
                style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "6px" }}
              />
              <h2 style={{ margin: "0.5rem 0" }}>{food.foodname}</h2>
              <p>Rating: {food.foodrating}</p>
              <p>Restaurant: {food.restaurantName}</p>
              <p>Status: {food.restaurantStatus}</p>
            </div>
          ))}
        </div> */}
      </main>
      <Footer />
    </>
  );
}
