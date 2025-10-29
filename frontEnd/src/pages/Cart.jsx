import React, { useEffect } from "react";
import { useCart } from "../@utils/cartContext";
import { useNavigate } from "react-router";

function Cart() {
  const { cart, fetchCart, updateQuantity, removeFromCart, clearCart } =
    useCart();
  const navigate = useNavigate();
  // ✅ Auto-refresh cart whenever the Cart page mounts
  useEffect(() => {
    fetchCart();
  }, [removeFromCart, updateQuantity]);

  if (!cart || !cart.items || cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">🛒 Your Cart</h2>
        <p className="text-gray-400">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col lg:flex-row gap-8">
      {/* LEFT SIDE — CART ITEMS */}
      <div className="flex-1 bg-gray-800 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Your Cart Items</h2>

        <div className="flex flex-col gap-4">
          {cart.items.map((item) => (
            <div
              key={item.productId._id}
              className="flex items-center justify-between bg-gray-700 p-4 rounded-lg"
            >
              {/* Product Image */}
              <img
                src={item.productId.Image}
                alt={item.productId.name}
                className="w-20 h-20 object-cover rounded-lg"
              />

              {/* Product Info */}
              <div className="flex-1 px-4">
                <h3 className="font-semibold">{item.productId.name}</h3>
                <p className="text-gray-400 text-sm">
                  ${item.productId.price.toFixed(2)}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    updateQuantity(item.productId._id, item.quantity - 1)
                  }
                  disabled={item.quantity <= 1}
                  className="bg-gray-600 hover:bg-gray-500 px-3 py-1 rounded"
                >
                  -
                </button>
                <span className="font-semibold">{item.quantity}</span>
                <button
                  onClick={() =>
                    updateQuantity(item.productId._id, item.quantity + 1)
                  }
                  className="bg-gray-600 hover:bg-gray-500 px-3 py-1 rounded"
                >
                  +
                </button>
              </div>

              {/* Remove Item */}
              <button
                onClick={() => removeFromCart(item.productId._id)}
                className="ml-4 text-red-400 hover:text-red-500 text-xl"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE — SUMMARY */}
      <div className="w-full lg:w-1/3 bg-gray-800 p-6 rounded-xl shadow-lg h-fit">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <p className="text-lg">
          Total Items:{" "}
          <span className="font-semibold">{cart.items.length}</span>
        </p>

        <p className="text-xl mt-2">
          Total Price:{" "}
          <span className="text-blue-400 font-bold">
            ${cart.totalPrice?.toFixed(2) || 0}
          </span>
        </p>

        <button
          onClick={clearCart}
          className="mt-6 bg-red-600 hover:bg-red-700 w-full py-2 rounded font-semibold"
        >
          Clear Cart
        </button>

        <button
          onClick={() => navigate("/checkout")}
          className="mt-4 bg-blue-500 hover:bg-blue-600 w-full py-2 rounded font-semibold"
        >
          Proceed to Checkout
        </button>

        <button
          onClick={fetchCart}
          className="mt-4 bg-gray-700 hover:bg-gray-600 w-full py-2 rounded font-semibold"
        >
          🔄 Refresh Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
