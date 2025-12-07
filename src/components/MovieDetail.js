import React from 'react';
import { useParams, Link } from 'react-router-dom';

const movieDatabase = {
  1: {
    title: "Интерстеллар",
    year: 2014,
    rating: "9.0",
    genre: "Фантастика / Драма",
    description: "Группа астронавтов отправляется через червоточину в поисках нового дома для человечества. Эпический sci-fi шедевр от Кристофера Нолана.",
    poster: "https://image.tmdb.org/t/p/w1280/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
  },
  2: {
    title: "Начало",
    year: 2010,
    rating: "8.8",
    genre: "Фантастика / Боевик",
    description: "Вор, способный красть идеи из снов, получает задание внедрить идею в подсознание человека.",
    poster: "https://image.tmdb.org/t/p/w1280/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"
  },
  3: {
    title: "Матрица",
    year: 1999,
    rating: "8.7",
    genre: "Фантастика / Боевик",
    description: "Хакер узнаёт шокирующую правду о реальности и возглавляет восстание против машин.",
    poster: "https://image.tmdb.org/t/p/w1280/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
  },
  4: {
  title: "Бойцовский клуб",
  year: 1999,
  rating: "8.8",
  genre: "Драма / Триллер",
  description: "Офисный клерк и харизматичный анархист создают подпольный бойцовский клуб, который перерастает в нечто гораздо большее. Первое правило Бойцовского клуба — не говорить о Бойцовском клубе.",
  poster: "https://image.tmdb.org/t/p/w1280/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
},
  5: {
    title: "Оппенгеймер",
    year: 2023,
    rating: "8.4",
    genre: "Драма / Биография",
    description: "История создателя атомной бомбы — физика Роберта Оппенгеймера.",
    poster: "https://image.tmdb.org/t/p/w1280/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
  },
  6: {
    title: "Аватар: Путь воды",
    year: 2022,
    rating: "7.6",
    genre: "Фантастика / Приключения",
    description: "Джейк Салли и его семья сражаются за выживание на Пандоре.",
    poster: "https://image.tmdb.org/t/p/w1280/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
  }
};

export default function MovieDetail() {
  const { id } = useParams();
  const movie = movieDatabase[id] || {
    title: "Фильм не найден",
    poster: "",
    description: "Такого фильма нет в базе данных."
  };

  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '3.5rem' }}>
        {movie.title}
      </h1>

      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <img
          src={movie.poster}
          alt={movie.title}
          style={{
            width: '100%',
            borderRadius: '20px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.7)',
            marginBottom: '2rem'
          }}
        />

        <div style={{ background: 'rgba(30,30,60,0.8)', padding: '2rem', borderRadius: '16px', marginBottom: '2rem' }}>
          <p style={{ fontSize: '1.4rem', margin: '1rem 0' }}>
            <strong>Год:</strong> {movie.year}
          </p>
          <p style={{ fontSize: '1.4rem', margin: '1rem 0' }}>
            <strong>Рейтинг:</strong> ⭐ {movie.rating}/10
          </p>
          <p style={{ fontSize: '1.4rem', margin: '1rem 0' }}>
            <strong>Жанр:</strong> {movie.genre}
          </p>
        </div>

        <p style={{ fontSize: '1.3rem', lineHeight: '1.8', color: '#ccc' }}>
          {movie.description}
        </p>

        <Link
          to="/movies"
          style={{
            display: 'inline-block',
            marginTop: '3rem',
            padding: '15px 50px',
            background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
            color: 'white',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.3rem',
            boxShadow: '0 10px 30px rgba(78,205,196,0.4)',
            transition: '0.3s'
          }}
          onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={e => e.target.style.transform = 'scale(1)'}
        >
          ← Назад к фильмам
        </Link>
      </div>
    </div>
  );
}