// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

// старые страницы
import Home from './components/Home';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import About from './components/About';

// новые страницы (корзина)
import BasketList from './pages/basket_list';
import BasketDetail from './pages/basket_detail';
import CreateOrder from './pages/create_order';
import UpdateOrder from './pages/update_order';

import './App.css';

// login 
import Login from './pages/login';
import Register from './pages/register';
import Contacts from './pages/contacts';

function App() {
  const [orders, setOrders] = useState([
    { id: 1, name: 'Заказ 1' },
    { id: 2, name: 'Заказ 2' },
  ]);

  const addOrder = (order) => setOrders([...orders, order]);
  const updateOrder = (id, newName) =>
    setOrders(orders.map(o => o.id === id ? { ...o, name: newName } : o));
  const deleteOrder = (id) =>
    setOrders(orders.filter(o => o.id !== id));

  return (
    <Router>
      <div className="App">
        <Header />

        <main style={{ minHeight: '100vh', padding: '20px 0' }}>
          <Routes>
            {/* старые */}
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/about" element={<About />} />

            {/* новые */}
            <Route path="/basket" element={<BasketList orders={orders} setOrders={setOrders} deleteOrder={deleteOrder} />} />
            <Route path="/basket/:id" element={<BasketDetail orders={orders} />} />
            <Route path="/create-order" element={<CreateOrder addOrder={addOrder} />} />
            <Route path="/update-order/:id" element={<UpdateOrder orders={orders} updateOrder={updateOrder} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
