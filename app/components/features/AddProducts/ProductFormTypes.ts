export interface ProductFormTypes {
    name: string;
    price: number;
    image: string;
    description: string;
};

export const ProductFormDefaultValues: ProductFormTypes = {
    name: '',
    price: 0,
    image: '',
    description: '',
};