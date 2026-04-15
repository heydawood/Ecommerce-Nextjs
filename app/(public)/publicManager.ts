import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
//import { customToast } from '@/Common/Components/ShowToast';

import { getProducts } from '../services/Products/Products';

export const usePublicManager = () => {
  const queryClient = useQueryClient();

  // GET ALL Products
  const getProductsQuery = () =>
    useQuery({
      queryKey: ['products'],
      queryFn: getProducts,
    });

  //

  return {
    // queries
    getProductsQuery,

    // mutations

  };
};
