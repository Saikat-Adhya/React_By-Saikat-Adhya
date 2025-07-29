import express from 'express';
import { registerUser, getAllUsers,loginUser, editUser, getUserById,deleteUser } from '../controllers/userController.js'; // Ensure correct import path

const router = express.Router();


router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/user/:id', editUser); // Ensure editUser is imported from the controller
router.get('/user', getAllUsers);
router.get('/user/:id', getUserById); // Ensure getUserById is imported from the controller
router.delete('/user/:id', deleteUser); // Ensure deleteUser is imported from the controller

export default router;