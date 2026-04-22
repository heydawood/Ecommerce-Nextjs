'use client'

import CreateProductForm from '@/app/components/features/AddProducts/AddProductsForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AddProductsPage = () => {

  return (
    <>
    <Card className="px-4">
      <CardHeader className="border-b px-0">
        <CardTitle className="text-subheading">Add New Product</CardTitle>
      </CardHeader>
      <CardContent className="px-0 mt-4">
        <CreateProductForm />
      </CardContent>
    </Card>
    </>
  )
}

export default AddProductsPage