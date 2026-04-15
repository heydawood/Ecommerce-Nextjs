import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice/CartSlice";
import authReducer from "./AuthSlice/AuthSlice";
import productsReducer from "./ProductsSlice/ProductsSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    products: productsReducer,
  },
});

export type AppStore = typeof store; // Get the type of our store variable
export type RootState = ReturnType<AppStore['getState']> // Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = AppStore['dispatch'] //Inferred type: burger: burgerReducer}