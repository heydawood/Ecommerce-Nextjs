import api from "../Api";

export const getOrders = async () => {
  const res = await api.get('/orders');
  console.log('response from api:', res )
  return res.data;
};