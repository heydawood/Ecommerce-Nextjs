'use client';

import { Button } from '@/components/ui/button';
import SVG from 'react-inlinesvg';
import { useAdminManager } from '../adminManager';
import Header from '@/app/components/admin/Header';
import AllProductsTable from '@/app/components/features/AllProducts/AllProductsTable';


export default function AllProductsPage() {

  const {getProductsQuery} = useAdminManager();
  const { data = [], isLoading } = getProductsQuery();

  return (
    <div className="space-y-4">
      <div className="border border-gray-light p-4 bg-background rounded-xl">
        
        <Header
          title="All Products"
          // ActionButtons={
          //   <Button className="bg-primary rounded-xl px-5 py-5">
          //     <SVG src="/icons/add-circle.svg" className="mr-2" />
          //     <span>Add Product</span>
          //   </Button>
          // }
        />

        <AllProductsTable data={data} loading={isLoading} />
      </div>
    </div>
  );
}