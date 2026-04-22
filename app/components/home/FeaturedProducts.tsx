"use client";

import { usePublicManager } from "@/app/(public)/publicManager";
import { useAppDispatch } from "@/app/hooks/hooks";
import { addToCart } from "@/app/redux/CartSlice/CartSlice";
import { Product } from "@/app/Types/product";
import Link from "next/link";
import { customToast } from "../common/ShowToast";
import Image from "next/image";
import { getProducts } from "@/app/services/Products/Products";
import { useQuery } from "@tanstack/react-query";

const FeaturedProducts = () => {
  const dispatch = useAppDispatch();
  
  // const {getProductsQuery} = usePublicManager();
  // const { data: products, isLoading, isError } = getProductsQuery();
  
  // if (isLoading) {
  //   return <div className="text-center py-10">Loading products...</div>;
  // }

  // if (isError || !products) {
  //   return <div className="text-red-500 text-center py-10">Failed to load products</div>;
  // }

  //new
  const { data : products , isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  if (isLoading) return <p>Loading...</p>; // won't flash now
  if (isError) return <p>Error</p>;

  
  return (
    <div id="shop" className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="uppercase text-gray-600 font-medium">
            our products
          </h2>
          <p className="mt-2 text-3xl md:text-4xl uppercase text-gray-800">
            new arrivals
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
          {products.map((product: Product) => (
            <div key={product.id} className="group">

              {/* Image */}
              <div className="overflow-hidden relative border rounded-sm">
                <Link href={`/product/${product.id}`}>
                  {/* <img
                  
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
                  /> */}
                  <Image
                  height={350}
                  width={350}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>

                {/* Add To Cart */}
                <button
                  onClick={() => {
                    dispatch(addToCart(product));
                    customToast.success(`${product.name} added to cart!`);
                  }}
                  className="absolute bottom-0 left-0 w-full bg-gray-950 hover:bg-[#ffae00] text-white py-3 text-sm font-medium 
                  translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                >
                  Add To Cart
                </button>
              </div>

              {/* Info */}
              <div className="mt-5 text-center">
                <h3 className="font-medium text-gray-800">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  ${product.price}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FeaturedProducts;