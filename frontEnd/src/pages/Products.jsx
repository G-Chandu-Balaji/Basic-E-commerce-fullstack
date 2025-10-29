import React, { useEffect, useState } from "react";
import { useCart } from "../@utils/cartContext";

function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.data))
      .catch(console.error);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {products.map((p) => (
        <div key={p._id} className="bg-gray-800 p-4 rounded-lg text-white">
          <img
            src={p.Image}
            alt={p.name}
            className="w-full h-48 object-cover"
          />
          <h3 className="mt-2 font-bold">{p.name}</h3>
          <p>${p.price}</p>
          <button
            onClick={() => addToCart(p._id)}
            className="mt-2 bg-blue-500 w-full py-2 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
