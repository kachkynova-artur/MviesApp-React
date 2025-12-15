let basket = [
  { id: 1, title: "The Matrix", price: 10 },
  { id: 2, title: "Interstellar", price: 12 },
];

export const getBasket = () => {
  return Promise.resolve(basket);
};

export const getItem = (id) => {
  return Promise.resolve(basket.find(item => item.id === Number(id)));
};

export const addItem = (item) => {
  const newItem = { id: Date.now(), ...item };
  basket.push(newItem);
  return Promise.resolve(newItem);
};

export const updateItem = (id, updated) => {
  basket = basket.map(item =>
    item.id === Number(id) ? { ...item, ...updated } : item
  );
  return Promise.resolve();
};

export const deleteItem = (id) => {
  basket = basket.filter(item => item.id !== Number(id));
  return Promise.resolve();
};
