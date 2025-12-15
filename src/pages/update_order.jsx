import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const initialOrders = [
  { id: 1, title: 'Movie A', quantity: 2 },
  { id: 2, title: 'Movie B', quantity: 1 },
];

function UpdateOrder() {
  const { id } = useParams();
  const order = initialOrders.find(o => o.id === parseInt(id));
  const [title, setTitle] = useState(order?.title || '');
  const [quantity, setQuantity] = useState(order?.quantity || 1);
  const navigate = useNavigate();

  if (!order) return <p>Заказ не найден</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ id: order.id, title, quantity });
    navigate('/basket');
  };

  return (
    <div>
      <h2>Редактировать заказ</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={title} 
          onChange={e => setTitle(e.target.value)} 
          required 
        />
        <input 
          type="number" 
          min="1" 
          value={quantity} 
          onChange={e => setQuantity(parseInt(e.target.value))} 
          required 
        />
        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
}

export default UpdateOrder;
