export const addToCart = () => ({
  type: 'ADD_TO_CART',
  payload: item,
});

export const removeItem = () => ({
  type: 'REMOVE_FROM_CART',
  payload: item,
});
