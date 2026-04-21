import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getProducts } from '../services/Products/Products';
import { getOrders } from '../services/Orders/Orders';

export const useAdminManager = () => {
  const queryClient = useQueryClient();

  // GET ALL Orders
  const getOrdersQuery = () =>
    useQuery({
      queryKey: ['orders'],
      queryFn: getOrders,
    });

  //GET ALL Products
const getProductsQuery = () =>
    useQuery({
      queryKey: ['products'],
      queryFn: getProducts,
    });


  return {
    // queries
    getOrdersQuery,
    getProductsQuery,

    // mutations

  };
};