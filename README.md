# 🛍️ Full-Stack E-Commerce App (Vibe Commerce)

This project is a **basic full-stack e-commerce web application** built for screening purposes.  
It includes a **React frontend** and a **Node.js + Express + MongoDB backend**.

---

## 🧩 Overview

- Frontend: React + Tailwind CSS + Context API
- Backend: Node.js + Express + MongoDB (Mongoose)
- Functionality: Add to cart, remove items, checkout, view receipt

---

## 🖥️ Frontend Setup

### ⚙️ Installation

```bash
cd frontend
npm install
npm run dev
```

The app will run on [http://localhost:5173](http://localhost:5173).

### 🧱 Features

- 🏠 Home page with product listings
- 🛒 Add / remove / update items in cart
- 💳 Checkout with mock shipping address and payment method (COD)
- 🧾 Order receipt displayed automatically after order placement
- ⚡ Context-based global state management

### 📁 Folder Structure

```
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── @utils/
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── tailwind.config.js
```

---

## 🧮 Backend Setup

### ⚙️ Installation

```bash
cd backend
npm install
npm start
```

The backend runs on [http://localhost:5000](http://localhost:5000).

### 🔧 Environment Variables

Create a `.env` file inside the backend folder:

```
PORT=5000
MONGO_URI=mongodb+srv://<your-mongo-connection>
```

### 📡 API Routes

#### 🛍️ Products

| Method | Route           | Description        |
| ------ | --------------- | ------------------ |
| GET    | `/api/products` | Fetch all products |

#### 🛒 Cart

| Method | Route                         | Description      |
| ------ | ----------------------------- | ---------------- |
| GET    | `/api/cart/:userId`           | Get user’s cart  |
| POST   | `/api/cart/add`               | Add item to cart |
| PATCH  | `/api/cart//:userId/update`   | Update quantity  |
| DELETE | `/api/cart/clear/:userId`     | Clear cart       |
| DELETE | `/api/cart/:userId/:producId` | delete product   |

#### 📦 Orders

| Method | Route                        | Description                  |
| ------ | ---------------------------- | ---------------------------- |
| POST   | `/api/cart/:userId/checkout` | Place new order              |
| GET    | `/api/orders/user/:orderId`  | Fetch specific order receipt |

### 🧾 Example Order Payload

```json
{
  "shippingAddress": {
    "street": "123 MG Road",
    "city": "Bangalore",
    "state": "KA",
    "postalCode": "560001",
    "country": "India"
  },
  "paymentMethod": "COD"
}
```

---

## 🔗 Integration

- Frontend fetches data from backend API using Fetch API
- Cart syncs with MongoDB
- After checkout, the order is created and receipt displayed automatically
- Cart clears after order placement

---

## 🧪 Test Flow

1. Start backend → `npm start`
2. Start frontend → `npm run dev`
3. Visit homepage → Browse products
4. Add items to cart → Proceed to checkout
5. Fill shipping details → Place order
6. View generated order receipt (auto-refreshes)

---

## 🧑‍💻 Author

**Balaji Chandu**  
Full Stack Developer  
📧 balaji5220771@gmail.com
