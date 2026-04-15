import { getProducts } from "@/app/services/Products/Products";
import { Product } from "@/app/Types/product";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;}

  const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null
};

export const fetchProducts = createAsyncThunk<Product[]>('products/', async () => {
    const response = await getProducts();
    return response;  //response.data is already handled in getProducts, so we return response directly
})

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers:(builder) => {
    builder
    .addCase(fetchProducts.pending, (state)=>{
        state.loading = true;
        state.error = null
    })

    .addCase(fetchProducts.fulfilled, (state, action)=>{
        state.loading = false;
        state.products = action.payload
    })

    .addCase(fetchProducts.rejected, (state)=>{
        state.loading = false;
        state.error =  "Something went wrong"
    })
  }
  });

export default productsSlice.reducer;