import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
    const { name, email, password, age, address } = req.body;
if (!name || !email || !password || !age || !address) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        if (await User.findOne({ email })) {
            return res.status(400).json({ message: "User already exists" });
        }
        const user = await User.create({ name, email, password, age, address });
        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error: error.message });
    }

};
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: "Login successful", user ,token});
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error: error.message });
    }
};

export const editUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, age, address } = req.body;
    if (!name || !email || !age || !address) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        const user = await User.findByIdAndUpdate(id, { name, email, age, address }, { new: true });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User updated successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error: error.message });
    }
};

export const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user", error: error.message });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching users", error: error.message });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        // alert("User deleted successfully.");
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error: error.message });
    }
};

