import bcrypt from "bcryptjs";
import userModel from "../Model/user.model.js";
export const adduser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing = await userModel.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await userModel.find({}, "-password");
    res.status(200).json({ result: users.length, data: users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
