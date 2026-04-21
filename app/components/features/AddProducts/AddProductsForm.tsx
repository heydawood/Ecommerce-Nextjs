'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { createProductAction } from '@/app/actions/productActions';
import { useQueryClient } from '@tanstack/react-query';
import { customToast } from '../../common/ShowToast';
import Input from '@/components/ui/input/Input';
import { ProductFormDefaultValues, ProductFormTypes } from './ProductFormTypes';



export default function CreateProductForm() {
    const queryClient = useQueryClient();

    const createProductForm = useForm<ProductFormTypes>({
    defaultValues: ProductFormDefaultValues,
    mode: 'onChange',
  });

    const {
        handleSubmit,
        reset,
        formState: { isSubmitting },
    } = useForm<ProductFormTypes>();

    const onSubmit = async (data: ProductFormTypes) => {
        console.log('Product not created yet', data);
        try {
            await createProductAction({
                ...data,
                price: Number(data.price),
            });
            console.log('Product created successfully', data);

            customToast.success('Product added successfully');

            createProductForm.reset();
            
            //refresh products list
            queryClient.invalidateQueries({ queryKey: ['products'] });
            
        } catch (error) {
            console.error(error);
            customToast.error('Failed to add product');
        }
    };

    return (

        <FormProvider {...createProductForm}>

            <form onSubmit={createProductForm.handleSubmit(onSubmit)} className="space-y-4">

                {/* Name */}
                <div className="mb-6">
                    <Input
                    allowAsterisk
                        label='Product Name'
                        name='name'
                        placeholder="Name"
                        rules={{
                            required: 'Product Name is required',
                            minLength: {
                                value: 2,
                                message: 'Product Name must be at least 2 characters long',
                            }
                        }
                        }
                    />

                </div>

                {/* Price */}
                <div className='mb-6'>
                    <Input
                    allowAsterisk
                        type='number'
                        label='Price'
                        name='price'
                        placeholder="Price"
                        rules={{
                            required: 'Price is required',
                            minLength: {
                                value: 2,
                                message: 'Price must be at least 2 numbers long',
                            }
                        }
                        } />
                </div>

                {/* Image */}
                <div className="mb-6">
                    <Input
                    allowAsterisk
                        label='Image'
                        name='image'
                        placeholder="Image"
                        rules={{
                            required: 'Image URL is required',
                            minLength: {
                                value: 2,
                                message: 'Image URL must be at least 2 characters long',
                            }
                        }
                        }
                    />
                </div>

                {/* Description */}
                <div className="mb-6">
                    <Input
                        label='Description'
                        name='description'
                        placeholder="Description"
                        rules={{
                            required: 'Description is required',
                            minLength: {
                                value: 2,
                                message: 'Description must be at least 2 characters long',
                            }
                        }
                        }
                        allowAsterisk
                    />
                </div>

                {/* Submit */}
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Saving...' : 'Save Product'}
                </Button>
            </form>
        </FormProvider>
    );
}
