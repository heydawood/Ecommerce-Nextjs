# 🛒 Full Stack E-Commerce Admin & Store (Next.js)

A modern e-commerce application built with **Next.js (App Router)** featuring:
- Public storefront
- Admin dashboard
- Order management
- Product management
- Cart system
- Mock API integration

---

##  Tech Stack

- **Frontend:** Next.js 16 (App Router), React, TypeScript
- **Styling:** Tailwind CSS, shadcn/ui
- **State Management:** Redux Toolkit
- **Data Fetching:** TanStack Query
- **Forms:** React Hook Form
- **API:** MockAPI (REST)
- **Deployment:** Vercel

---

## Features

### Storefront
- Product listing
- Hero slider section
- Add to cart functionality
- Cart management (Redux)

### Admin Panel
- Protected admin routes
- View all orders
- Update order status (Pending, Dispatched, Fulfilled)
- Delete orders
- Create new products

### Orders Management
- Orders table with sorting
- Items breakdown per order
- Status control via dropdown
- Pagination-ready table

### Product Management
- Add new products via form
- Server Actions for mutations
- Form validation using React Hook Form

### Authentication (Mock)
- Cookie-based login system
- Middleware route protection
- Redirect handling

---

## Project Structure

app/
admin/
orders/
products/
addProducts/
(public)/
page.tsx
actions/
productActions.ts
authActions.ts

components/
ui/
features/
Order/
Admin/
Cart/

Redux/
slices/
cartSlice.ts

Types/
product.ts
order.ts


---

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo


2. Install dependencies

npm install

3. Run development server

npm run dev

4. Open in browser

http://localhost:3000


🔑 Admin Login (Mock)
Email: admin@test.com
Password: 123456


🔌 API
This project uses MockAPI for backend simulation.

Example endpoints:
/products
/orders

⚡ Key Concepts Used
Next.js App Router (Server + Client Components)
Server Actions for mutations
TanStack Query for data fetching
Redux Toolkit for cart state
Middleware for route protection
Reusable Table Component (custom built)

📌 Future Improvements
 Real authentication (JWT / NextAuth)
 Payment integration (Stripe)
 Server-side pagination
 Image upload (Cloudinary)
 Role-based access control


🙌 Author

Dawood Faisal

GitHub: https://github.com/heydawood
LinkedIn: https://www.linkedin.com/in/heydawood

⭐ If you found this useful, give it a star!