'use client';

import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/app/services/Products/Products';
import AllProductsTable from '@/app/components/features/AllProducts/AllProductsTable';
import OrdersTable from '@/app/components/features/Order/OrderTable';
import { getOrders } from '@/app/services/Orders/Orders';

export default function AllOrdersClient() {
  const { data = [], isLoading } = useQuery({
    queryKey: ['orders'],
    queryFn: getOrders,
  });

  return <OrdersTable data={data} loading={isLoading} />;
}
