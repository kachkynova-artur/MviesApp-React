import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">🎬 MoviesApp</div>
      <nav>
        <a href="/">Home</a>
        <a href="/movies">Movies</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
}
