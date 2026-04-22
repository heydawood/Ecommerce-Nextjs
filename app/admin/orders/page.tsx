'use client';

import { Button } from '@/components/ui/button';
import SVG from 'react-inlinesvg';
import OrdersTable from '@/app/components/features/Order/OrderTable';
import { useAdminManager } from '../adminManager';
import Header from '@/app/components/admin/Header';




export default function OrdersPage() {

  const {getOrdersQuery} = useAdminManager();
  const { data = [], isLoading } = getOrdersQuery();

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

        <OrdersTable data={data} loading={isLoading} />
      </div>
    </div>
  );
}