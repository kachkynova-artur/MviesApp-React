import React from "react";

const movies = [
  { id: 1, title: "Inception", price: 10 },
  { id: 2, title: "Interstellar", price: 12 },
  { id: 3, title: "Avatar", price: 15 },
];

export default function MovieList() {
  const addToBasket = (movie) => {
    const basket = JSON.parse(localStorage.getItem("basket")) || [];
    basket.push({ ...movie, quantity: 1 });
    localStorage.setItem("basket", JSON.stringify(basket));
    alert("Movie added to basket ✅");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Movies</h1>

      {movies.map((movie) => (
        <div
          key={movie.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{movie.title}</h3>
          <p>Price: ${movie.price}</p>
          <button onClick={() => addToBasket(movie)}>
            Add to basket
          </button>
        </div>
      ))}
    </div>
  );
}
