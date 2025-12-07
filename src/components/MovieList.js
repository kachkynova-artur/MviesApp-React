import React from 'react';
import { Link } from 'react-router-dom';

const movies = [
  { id: 1, title: "Интерстеллар", year: 2014, rating: "9.0", poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
  { id: 2, title: "Начало", year: 2010, rating: "8.8", poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg" },
  { id: 3, title: "Матрица", year: 1999, rating: "8.7", poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" },
{ id: 4, title: "Бойцовский клуб", year: 1999, rating: "8.8", poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg" },
  { id: 5, title: "Оппенгеймер", year: 2023, rating: "8.4", poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg" },
  { id: 6, title: "Аватар: Путь воды", year: 2022, rating: "7.6", poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" },
];

export default function MovieList() {
  return (
    <div className="container">
      <h1>Лучшие фильмы</h1>
      <div className="movies-grid">
        {movies.map(movie => (
          <Link key={movie.id} to={`/movie/${movie.id}`} className="movie-card">
            <img 
              src={movie.poster} 
              alt={movie.title}
              style={{ width: '100%', height: '420px', objectFit: 'cover', borderRadius: '16px 16px 0 0' }}
            />
            <div style={{ padding: '1rem' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', textAlign: 'center' }}>{movie.title}</h3>
              <p style={{ textAlign: 'center', color: '#4ecdc4', fontWeight: 'bold', margin: 0 }}>
                {movie.year} ★ {movie.rating}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}