import orderModel from "../Model/order.model.js";

export const fetchOrders = async (req, res) => {
  try {
    const { userId } = req.params;

    const orders = await orderModel
      .find({ userId })
      .populate("items.productId", "name price Image description")
      .sort({ createdAt: -1 });

    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No orders found" });
    }

    res.status(200).json({
      message: "Orders fetched successfully",
      count: orders.length,
      orders,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
