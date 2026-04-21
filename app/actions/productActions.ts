'use server';

export async function createProductAction(data: {
  name: string;
  price: number;
  image: string;
  description: string;
}) {
  const res = await fetch('https://698ef4e5aded595c25334f72.mockapi.io/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...data,
      createdAt: new Date().toISOString(),
    }),
  });


//error handeling in next.js
  if (!res.ok) {
    throw new Error('Failed to create product');
  }

  return res.json();
}
