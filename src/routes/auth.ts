import express from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/authController";


const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: User authentication API
 */

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new user
 *     description: Create a new account.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 example: "johndoe@example.com"
 *               password:
 *                 type: string
 *                 example: "securepassword"
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: User already exists
 */
router.post("/register", registerUser);
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login user
 *     description: Authenticate user and receive a JWT token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "johndoe@example.com"
 *               password:
 *                 type: string
 *                 example: "securepassword"
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Invalid email or password
 */
router.post("/login", loginUser);
/**
 * @swagger
 * /logout:
 *   post:
 *     summary: Logout user
 *     description: Logout the current user (client-side).
 *     responses:
 *       200:
 *         description: Logout successful
 */
router.post("/logout", logoutUser);
export default router;
