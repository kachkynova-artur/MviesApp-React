import React from 'react';
import { useParams } from 'react-router-dom';
import './basket.css';
const initialOrders = [
  { id: 1, title: 'Movie A', quantity: 2 },
  { id: 2, title: 'Movie B', quantity: 1 },
];

function BasketDetail() {
  const { id } = useParams();
  const order = initialOrders.find(o => o.id === parseInt(id));

  if (!order) return <p>Заказ не найден</p>;

  return (
    <div>
      <h2>Детали заказа</h2>
      <p>Название: {order.title}</p>
      <p>Количество: {order.quantity}</p>
    </div>
  );
}

export default BasketDetail;
