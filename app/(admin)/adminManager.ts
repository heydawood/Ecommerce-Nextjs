import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getProducts } from '../services/Products/Products';
import { getOrders } from '../services/Orders/Orders';

export const useUserManager = () => {
  const queryClient = useQueryClient();

  // GET ALL Orders
  const getOrdersQuery = () =>
    useQuery({
      queryKey: ['orders'],
      queryFn: getOrders,
    });

  //



  return {
    // queries
    getOrdersQuery,

    // mutations

  };
};