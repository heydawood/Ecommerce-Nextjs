"use server";

import { Order } from "../Types/order";

export async function createOrder(order: Order) {
  const res = await fetch(
    "https://698ef4e5aded595c25334f72.mockapi.io/orders",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...order,
        createdAt: new Date().toISOString(),
        status: "pending",
      }),
    }
  );

  
//error handeling in next
  if (!res.ok) {
    throw new Error("Failed to create order");
  }

  return res.json();
}



export async function updateOrderStatus(id: string, status: string) {
  await fetch(`https://698ef4e5aded595c25334f72.mockapi.io/orders/${id}`, {
    method: 'PUT', // or PATCH depending on API
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
  });
}

export async function deleteOrder(id: string) {
  await fetch(`https://698ef4e5aded595c25334f72.mockapi.io/orders/${id}`, {
    method: 'DELETE',
  });
}

