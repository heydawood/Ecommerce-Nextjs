
import { customToast } from "@/app/components/common/ShowToast";
import { useAppDispatch } from "@/app/hooks/hooks";
import { addToCart } from "@/app/redux/CartSlice/CartSlice";
import { getProductById } from "@/app/services/Products/Products";
import { Product } from "@/app/Types/product";
import { Button } from "@/components/ui/button";


interface Props {
    params: {
        id: string;
    };
}

export default async function ProductPage({ params }: Props) {
    
    const resolvedParams = await params;
    const product: Product = await getProductById(resolvedParams.id);
    
   // const dispatch = useAppDispatch();
    return (
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">

            {/* Image */}
            <div>
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[500px] object-cover"
                />
            </div>

            {/* Details */}
            <div>
                <h1 className="text-3xl md:text-4xl font-semibold">
                    {product.name}
                </h1>

                <p className="mt-4 text-gray-600 text-lg">
                    ${product.price}
                </p>

                <p className="mt-6 text-gray-500">
                    {product.description || "No description available."}
                </p>

                <Button
                className="bottom-0 left-0 w-full bg-gray-950 hover:bg-[#ffae00] text-white py-3 text-sm font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                >
                    Add To Cart
                </Button>

            </div>

        </div>
    );
}