//"use client";

import { usePublicManager } from "./publicManager";
import FeaturedProducts from "../components/home/FeaturedProducts";
import HeroSection from "../components/home/HeroSection";
import { getQueryClient } from "@/lib/queryClient";
import { getProducts } from "../services/Products/Products";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function HomePage() {
  //new
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  // const {getProductsQuery} = usePublicManager();
  // const { data: products, isLoading, isError } = getProductsQuery();

  return (
    <>
       <HeroSection />

      {/* {isLoading && <p className="text-center py-10">Loading...</p>}
      {isError && <p className="text-center py-10 text-red-500">Error loading products</p>} */}

      {/* {products && <FeaturedProducts />} */}

      <HydrationBoundary state={dehydrate(queryClient)}>
        <FeaturedProducts />
      </HydrationBoundary>
      
    </>
  );
}
