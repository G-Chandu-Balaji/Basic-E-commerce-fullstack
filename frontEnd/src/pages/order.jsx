import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function OrderSuccess() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/orders/user/${orderId}`
        );
        const data = await res.json();
        if (res.ok) setOrder(data.orders);
      } catch (err) {
        console.error("Error fetching order:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [orderId]);

  if (loading)
    return (
      <div className="text-center text-white py-10">Loading receipt...</div>
    );

  if (!order)
    return (
      <div className="text-center text-red-400 py-10">Order not found</div>
    );

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 flex justify-center">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h2 className="text-3xl font-bold mb-6 text-green-400 text-center">
          ✅ Order Placed Successfully!
        </h2>

        <div className="text-gray-400 text-center mb-4">
          <p>
            Receipt #:{" "}
            <span className="text-white font-semibold">
              #VIBE{order._id.slice(-6).toUpperCase()}
            </span>
          </p>
          <p>Date: {new Date(order.createdAt).toLocaleString()}</p>
        </div>

        <hr className="border-gray-700 my-4" />

        <h3 className="text-xl font-semibold mb-3">🛍️ Items Ordered</h3>
        <ul className="space-y-3">
          {order.items.map((item) => (
            <li
              key={item.productId._id}
              className="flex justify-between bg-gray-800 p-3 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.productId.Image}
                  alt={item.productId.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <p>{item.productId.name}</p>
                  <p className="text-gray-400 text-sm">
                    Qty: {item.quantity} × ₹{item.productId.price}
                  </p>
                </div>
              </div>
              <p className="text-green-400 font-semibold">
                ₹{item.quantity * item.productId.price}
              </p>
            </li>
          ))}
        </ul>

        <hr className="border-gray-700 my-4" />

        <h3 className="text-xl font-semibold mb-2">🏠 Shipping Address</h3>
        <div className="bg-gray-800 p-4 rounded-lg text-gray-300">
          <p>{order.shippingAddress.street}</p>
          <p>
            {order.shippingAddress.city}, {order.shippingAddress.state} -{" "}
            {order.shippingAddress.postalCode}
          </p>
          <p>{order.shippingAddress.country}</p>
        </div>

        <div className="text-right text-2xl font-bold mt-6">
          Total: ₹{order.totalPrice}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            to="/"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg text-white font-semibold"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;
