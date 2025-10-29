import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../@utils/cartContext";

function Checkout() {
  const { userId, fetchCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    paymentMethod: "COD",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:5000/api/cart/${userId}/checkout`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            shippingAddress: {
              street: formData.street,
              city: formData.city,
              state: formData.state,
              postalCode: formData.postalCode,
              country: formData.country,
            },
            paymentMethod: formData.paymentMethod,
          }),
        }
      );

      const data = await res.json();
      if (res.ok) {
        //  Redirect automatically to receipt page
        navigate(`/order/${data.order.orderId}`);
      } else {
        alert(data.message || "Order placement failed");
      }
    } catch (err) {
      console.error(err);
      alert("Error placing order");
    } finally {
      setLoading(false);
      fetchCart();
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex justify-center items-center px-6 py-10">
      <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">
          🏠 Shipping Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {["street", "city", "state", "postalCode", "country"].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={formData[field]}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          ))}

          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 rounded-lg"
          >
            <option value="COD">Cash on Delivery</option>
            <option value="UPI">UPI</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition"
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
