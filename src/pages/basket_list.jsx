import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const initialOrders = [
  { id: 1, title: 'Movie A', quantity: 2 },
  { id: 2, title: 'Movie B', quantity: 1 },
];

function BasketList() {
  const [orders, setOrders] = useState(initialOrders);

  const handleDelete = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  return (
    <div>
      <h2>Корзина</h2>
      <Link to="/create-order">Добавить заказ</Link>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <Link to={`/basket/${order.id}`}>{order.title}</Link> - Кол-во: {order.quantity}
            <Link to={`/update-order/${order.id}`} style={{ marginLeft: '10px' }}>Редактировать</Link>
            <button onClick={() => handleDelete(order.id)} style={{ marginLeft: '10px' }}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BasketList;
