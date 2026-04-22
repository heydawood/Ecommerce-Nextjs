

import { Button } from '@/components/ui/button';
import SVG from 'react-inlinesvg';
import { useAdminManager } from '../adminManager';
import Header from '@/app/components/admin/Header';
import AllProductsTable from '@/app/components/features/AllProducts/AllProductsTable';
import { getQueryClient } from '@/lib/queryClient';
import { getProducts } from '@/app/services/Products/Products';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import AllProductsClient from './AllProductsClient';


export default async function AllProductsPage() {

  // const {getProductsQuery} = useAdminManager();
  // const { data = [], isLoading } = getProductsQuery();

  //new
const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

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

        <HydrationBoundary state={dehydrate(queryClient)}>
          <AllProductsClient />
        </HydrationBoundary>

        {/* <AllProductsTable data={data} loading={isLoading} /> */}

      </div>
    </div>
  );
}