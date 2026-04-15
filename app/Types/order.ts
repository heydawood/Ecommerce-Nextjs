import type { Product } from "./product";

export type OrderStatus = "pending" | "dispatched" | "fulfilled";

export interface Order {
  id?: string;
  items: Product[];
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
}