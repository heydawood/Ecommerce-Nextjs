import api from "../Api";

export const getProducts = async () => {
  const res = await api.get('/products');
  console.log('response from product api:', res)
  return res.data;
};

//createing new product
export const createOrder = async(order:Order): Promise<Order> => {

  const response  = await api.post("/orders", order);
  return response.data;

}