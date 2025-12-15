import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateOrder() {
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Для простоты просто логируем заказ
    console.log({ title, quantity });
    navigate('/basket');
  };

  return (
    <div>
      <h2>Создать заказ</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Название" 
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
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default CreateOrder;
