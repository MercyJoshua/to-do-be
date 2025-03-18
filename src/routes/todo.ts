import express from "express";
import { createTodo, deleteTodo, getTodoById, getTodos, updateTodo } from "../controllers/todoController";
import authMiddleware from "../middleware/authMiddleware";



const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Todos
 *   description: Todo management API
 */
/**
 * @swagger
 * /todos/all:
 *   get:
 *     summary: Get all todos for a user
 *     description: Retrieve a list of all todos associated with the authenticated user.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved todos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "65fd5d4f2d59e45a78b6e9e4"
 *                   title:
 *                     type: string
 *                     example: "Complete Swagger Docs"
 *                   description:
 *                     type: string
 *                     example: "Document all routes using Swagger"
 *                   dueDate:
 *                     type: string
 *                     example: "2025-04-10"
 *                   priority:
 *                     type: string
 *                     example: "High"
 *                   status:
 *                     type: string
 *                     example: "Pending"
 *       401:
 *         description: Unauthorized
 */
router.get("/all", authMiddleware, getTodos);
/**
 * @swagger
 * /todos/{id}:
 *   get:
 *     summary: Get a specific todo by ID
 *     description: Retrieve a specific todo that belongs to the authenticated user.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the todo to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved todo
 *       404:
 *         description: Todo not found
 *       401:
 *         description: Unauthorized
 */
router.get("/:id", authMiddleware, getTodoById);
/**
 * @swagger
 * /todos/create:
 *   post:
 *     summary: Create a new todo
 *     description: Adds a new todo item for the authenticated user.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Buy groceries"
 *               description:
 *                 type: string
 *                 example: "Milk, eggs, and bread"
 *               dueDate:
 *                 type: string
 *                 example: "2025-03-20"
 *               priority:
 *                 type: string
 *                 example: "Medium"
 *     responses:
 *       201:
 *         description: Todo created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "65fd5d4f2d59e45a78b6e9e4"
 *                 title:
 *                   type: string
 *                   example: "Buy groceries"
 *                 description:
 *                   type: string
 *                   example: "Milk, eggs, and bread"
 *                 dueDate:
 *                   type: string
 *                   example: "2025-03-20"
 *                 priority:
 *                   type: string
 *                   example: "Medium"
 *                 status:
 *                   type: string
 *                   example: "Pending"
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.post("/create", authMiddleware, createTodo); 
/**
 * @swagger
 * /todos/{id}:
 *   put:
 *     summary: Update an existing todo
 *     description: Modify an existing todo item for the authenticated user.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the todo to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Update Swagger Docs"
 *               description:
 *                 type: string
 *                 example: "Include auth routes documentation"
 *               dueDate:
 *                 type: string
 *                 example: "2025-04-01"
 *               priority:
 *                 type: string
 *                 example: "High"
 *               status:
 *                 type: string
 *                 example: "In Progress"
 *     responses:
 *       200:
 *         description: Successfully updated todo
 *       404:
 *         description: Todo not found or unauthorized
 *       401:
 *         description: Unauthorized
 */
router.put("/:id", authMiddleware, updateTodo); 
/**
 * @swagger
 * /todos/{id}:
 *   delete:
 *     summary: Delete a todo
 *     description: Remove a specific todo from the authenticated user's list.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the todo to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Todo deleted successfully
 *       404:
 *         description: Todo not found or unauthorized
 *       401:
 *         description: Unauthorized
 */
router.delete("/:id", authMiddleware, deleteTodo); 

export default router;
