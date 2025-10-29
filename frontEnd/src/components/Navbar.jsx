import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../@utils/cartContext";

function Navbar() {
  const { cart } = useCart();
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold tracking-wide">
        <NavLink to="/">🛍️ Vibe Commerce</NavLink>
      </h1>

      <ul className="hidden md:flex gap-6 text-lg">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `hover:text-blue-400 transition ${
                isActive ? "text-blue-400 font-semibold" : ""
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `hover:text-blue-400 transition ${
                isActive ? "text-blue-400 font-semibold" : ""
              }`
            }
          >
            Products
          </NavLink>
        </li>
        <li className="relative">
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `hover:text-blue-400 transition ${
                isActive ? "text-blue-400 font-semibold" : ""
              }`
            }
          >
            Cart
          </NavLink>
          {cart.items.length > 0 && (
            <span className="absolute -top-4 -right-4 bg-red-500 text-xs px-2 py-1 rounded-full">
              {cart.items.length}
            </span>
          )}
        </li>
        <li>MockUSer</li>
      </ul>

      <div className="md:hidden">
        <button className="text-white hover:text-blue-400 focus:outline-none">
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
