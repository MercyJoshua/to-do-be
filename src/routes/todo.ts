import express from "express";
import { createTodo, deleteTodo, getTodoById, getTodos, updateTodo } from "../controllers/todoController";
import authMiddleware from "../middleware/authMiddleware";



const router = express.Router();
router.get("/all", authMiddleware, getTodos);
router.get("/:id", authMiddleware, getTodoById);
router.post("/create", authMiddleware, createTodo); 
router.put("/:id", authMiddleware, updateTodo); 
router.delete("/:id", authMiddleware, deleteTodo); 

export default router;
