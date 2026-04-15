import { Order } from "@/app/Types/order";
import api from "../Api";
import { Product } from "@/app/Types/product";

export const getProducts = async () => {
  const res = await api.get('/products');
  console.log('response from product api:', res.data)
  return res.data;
};

// export const getProductById = async (id: string): Promise<Product> => {
//   const res = await api.get(`/products/${id}`);
//   console.log('response from single product api:', res.data)
//   return res.data;
// };

export const getProductById = async (id: string): Promise<Product> => {
  try {
    console.log(`Fetching product with ID: ${id}`);
    const res = await api.get(`/products/${id}`);
    console.log('Product fetched:', res.data);
    return res.data;
  } catch (error: any) {
    console.error(`Error fetching product ${id}:`, error);
    throw new Error(
      error?.message || `Failed to fetch product ${id}`
    );
  }
};



//createing new product
// export const createOrder = async(order:Order): Promise<Order> => {

//   const response  = await api.post("/orders", order);
//   return response.data;

// }