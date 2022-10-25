export const addToCart = (payload) => {
  // console.log('payload', payload);
  return {
    type: "ADD_TO_CART",
    payload: payload,
  };
};
export const Removecart =  (payload) => {
  return {
    type: "REMOVE_CART",
    payload: payload
  };
};
