import cartModel from "../Model/cart.model.js";
import productModel from "../Model/product.model.js";

//...........Add to cart........................
export const AddToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    const product = await productModel.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    let cart = await cartModel.findOne({ userId });

    if (!cart) {
      cart = new cartModel({
        userId,
        items: [{ productId, quantity }],
      });
    } else {
      const index = cart.items.findIndex(
        (item) => item.productId.toString() === productId
      );

      if (index > -1) {
        cart.items[index].quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }
    }

    await cart.save();
    res.status(200).json({ message: "Product added to cart", cart });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//.................get cart details of user.......................
export const getcart = async (req, res) => {
  try {
    const { userId } = req.params;
    let cart = await cartModel.findOne({ userId }).populate("items.productId");

    if (!cart) {
      cart = await cartModel.create({ userId, items: [] });
    }

    // Check if the cart is empty
    if (!cart.items || cart.items.length === 0) {
      return res.status(200).json({
        message: "Cart is empty",
        items: [],
        cartId: cart._id,
      });
    }

    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//...........update cart item......................
export const updateCartItem = async (req, res) => {
  try {
    const { userId } = req.params;
    const { productId, quantity } = req.body;

    const cart = await cartModel.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const item = cart.items.find(
      (item) => item.productId.toString() === productId
    );

    if (!item)
      return res.status(404).json({ message: "Item not found in cart" });

    item.quantity = quantity;
    await cart.save();

    res.status(200).json({ message: "Cart updated successfully", cart });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//..............remove from cart........................
export const removeFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.params;

    const cart = await cartModel.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== productId
    );

    await cart.save();
    res.status(200).json({ message: "Item removed", cart });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//.............clear cart of user......................
export const clearCart = async (req, res) => {
  try {
    const { userId } = req.params;

    const cart = await cartModel.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items = [];
    await cart.save();

    res.status(200).json({ message: "Cart cleared successfully", cart });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
