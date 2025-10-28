import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-20 ">
      <h1 className="text-4xl font-bold mb-6">Welcome to Vibe Commerce</h1>
      <p className="text-lg mb-8 max-w-lg">
        Explore our products, add them to your cart, and simulate a checkout —
        no login or payment required.
      </p>
      <Link
        to="/products"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Browse Products
      </Link>
    </div>
  );
};

export default Home;
