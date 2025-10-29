import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const userId = "6900972a8099201daabd3f94";
  const [cart, setCart] = useState({ items: [], totalPrice: 0 });
  const [loading, setLoading] = useState(false);

  const fetchCart = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/cart/${userId}`);
      const data = await res.json();
      setCart(data.cart || { items: [], totalPrice: 0 });
    } catch (err) {
      console.error("Failed to load cart", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch cart on mount
  useEffect(() => {
    fetchCart();
  }, []);

  // Add product
  const addToCart = async (productId) => {
    try {
      const res = await fetch("http://localhost:5000/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, productId, quantity: 1 }),
      });
      const data = await res.json();
      setCart(data.cart);
    } catch (err) {
      console.error("Add to cart failed", err);
    }
  };

  // Update quantity
  const updateQuantity = async (productId, quantity) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/cart/${userId}/update`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ productId, quantity }),
        }
      );
      const data = await res.json();
      setCart(data.cart);
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  // Remove product
  const removeFromCart = async (productId) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/cart/${userId}/${productId}`,
        { method: "DELETE" }
      );
      const data = await res.json();
      setCart(data.cart);
    } catch (err) {
      console.error("Remove failed", err);
    }
  };

  // Clear entire cart
  const clearCart = async () => {
    try {
      await fetch(`http://localhost:5000/api/cart/clear/${userId}`, {
        method: "DELETE",
      });
      setCart({ items: [], totalPrice: 0 });
    } catch (err) {
      console.error("Clear failed", err);
    }
  };

  return (
    <CartContext.Provider
      value={{
        userId,
        cart,
        loading,
        fetchCart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
