//'use client';

import { Button } from '@/components/ui/button';
import SVG from 'react-inlinesvg';
import OrdersTable from '@/app/components/features/Order/OrderTable';
import { useAdminManager } from '../adminManager';
import Header from '@/app/components/admin/Header';
import { getOrders } from '@/app/services/Orders/Orders';
import { getQueryClient } from '@/lib/queryClient';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import AllOrdersClient from './AllOrdersClient';




export default async function OrdersPage() {

  // const {getOrdersQuery} = useAdminManager();
  // const { data = [], isLoading } = getOrdersQuery();


  //new
const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['orders'],
    queryFn: getOrders,
  });


  return (
    <div className="space-y-4">
      <div className="border border-gray-light p-4 bg-background rounded-xl">
        
        <Header
          title="All Orders"
          // ActionButtons={
          //   <Button className="bg-primary rounded-xl px-5 py-5">
          //     <SVG src="/icons/add-circle.svg" className="mr-2" />
          //     <span>Add Order</span>
          //   </Button>
          // }
        />


        {/* <OrdersTable data={data} loading={isLoading} /> */}

        <HydrationBoundary state={dehydrate(queryClient)}>
          <AllOrdersClient />
        </HydrationBoundary>

      </div>
    </div>
  );
}