import { getProductById } from "@/app/services/Products/Products";
import { Product } from "@/app/Types/product";
import ProductData from "../ProductData";


interface Props {
    params: Promise<{ id: string }>
}


export default async function ProductPage({ params }: Props) {
    
    const resolvedParams = await params;
    const product: Product = await getProductById(resolvedParams.id);
    
    return (
        
        <ProductData product={product}/>
        
    );
}