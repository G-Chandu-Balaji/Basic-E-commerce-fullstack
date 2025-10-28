import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./Model/product.model.js";

dotenv.config();

const products = [
  {
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    description:
      "Experience premium sound quality with deep bass and noise cancellation.",
    Image:
      "https://m.media-amazon.com/images/I/41JACWT-wWL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    name: "Smart Fitness Watch",
    price: 129.99,
    description:
      "Track your heart rate, steps, and sleep with this waterproof smartwatch.",
    Image:
      "https://m.media-amazon.com/images/I/61wJNP17lEL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    name: "Portable Bluetooth Speaker",
    price: 59.99,
    description:
      "Compact, powerful speaker with 12-hour battery life and waterproof design.",
    Image:
      "https://m.media-amazon.com/images/I/71o6CU8MqVL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    name: "Wireless Mouse",
    price: 24.99,
    description: "Ergonomic design with smooth tracking and silent clicks.",
    Image:
      "https://m.media-amazon.com/images/I/51FUgfm2P-L._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    name: "Mechanical Keyboard",
    price: 99.99,
    description:
      "RGB backlit mechanical keyboard with tactile switches for a great typing experience.",
    Image:
      "https://m.media-amazon.com/images/I/618LUuAljQL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    name: "DSLR Camera",
    price: 699.99,
    description:
      "Capture stunning photos with this 24MP DSLR camera featuring a wide-angle lens.",
    Image:
      "https://m.media-amazon.com/images/I/71uoUdD68kL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    name: "Gaming Laptop",
    price: 1199.99,
    description:
      "Powerful laptop with Intel i7, RTX graphics, and 16GB RAM for seamless gaming.",
    Image:
      "https://m.media-amazon.com/images/I/81nPkLHN3vL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    name: "Smartphone Tripod",
    price: 29.99,
    description:
      "Adjustable tripod stand for smartphones with Bluetooth remote control.",
    Image:
      "https://m.media-amazon.com/images/I/61MmnxC0C5L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    name: "Wireless Charger",
    price: 39.99,
    description:
      "Fast 15W wireless charging pad compatible with all Qi-enabled devices.",
    Image:
      "https://m.media-amazon.com/images/I/61woZvYeQbL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    name: "Noise Cancelling Earbuds",
    price: 89.99,
    description:
      "Lightweight earbuds with active noise cancellation and 8-hour battery life.",
    Image:
      "https://m.media-amazon.com/images/I/61Lm9GFu8ML._AC_UY327_FMwebp_QL65_.jpg",
  },
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    await Product.deleteMany(); // clears old data
    await Product.insertMany(products);
    console.log("✅ Data inserted successfully!");
    process.exit();
  } catch (err) {
    console.error("❌ Error inserting data:", err);
    process.exit(1);
  }
};

seedData();
