'use client';

import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/app/services/Products/Products';
import AllProductsTable from '@/app/components/features/AllProducts/AllProductsTable';
import { getOrders } from '@/app/services/Orders/Orders';

export default function AllProductsClient() {
  const { data = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  return <AllProductsTable data={data} loading={isLoading} />;
}
