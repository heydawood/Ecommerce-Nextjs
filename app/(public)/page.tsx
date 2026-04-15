"use client";

import { usePublicManager } from "./publicManager";
import FeaturedProducts from "../components/home/FeaturedProducts";
import HeroSection from "../components/home/HeroSection";

export default function HomePage() {

  const {getProductsQuery} = usePublicManager();
  const { data: products, isLoading, isError } = getProductsQuery();

  return (
    <>
       <HeroSection />

      {isLoading && <p className="text-center py-10">Loading...</p>}
      {isError && <p className="text-center py-10 text-red-500">Error loading products</p>}

      {products && <FeaturedProducts />}
      
    </>
  );
}
