import React from 'react';

export default function About() {
  return (
    <div className="container" style={{ padding: '60px 20px', textAlign: 'center' }}>
      <h1>О проекте</h1>
      <p style={{ fontSize: '1.4rem', margin: '2rem 0', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
        Это учебный проект по React + React Router от студента <strong>Artur_it223</strong>
      </p>
      <p>Использованы: React 18, React Router v6, чистый CSS с градиентами и анимациями.</p>
      <p style={{ marginTop: '3rem', color: '#4ecdc4', fontSize: '1.2rem' }}>
        Сделано с любовью к кино и кодингу
      </p>
    </div>
  );
}