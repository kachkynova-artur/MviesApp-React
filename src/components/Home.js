import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '2rem' }}>
        Добро пожаловать в <span style={{ background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>MoviesApp</span>
      </h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '3rem', color: '#aaa' }}>
        Лучшие фильмы. Красивый дизайн. Никакой рекламы.
      </p>
      <Link to="/movies" style={{
        padding: '15px 40px',
        background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
        color: 'white',
        borderRadius: '50px',
        textDecoration: 'none',
        fontSize: '1.3rem',
        fontWeight: 'bold',
        boxShadow: '0 10px 30px rgba(78, 205, 196, 0.4)'
      }}>
        Смотреть фильмы
      </Link>
    </div>
  );
}