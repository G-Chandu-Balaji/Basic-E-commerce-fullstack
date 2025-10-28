import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
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
        <li>
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
        </li>
        <li>
          <NavLink
            to="/checkout"
            className={({ isActive }) =>
              `hover:text-blue-400 transition ${
                isActive ? "text-blue-400 font-semibold" : ""
              }`
            }
          >
            Checkout
          </NavLink>
        </li>
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
