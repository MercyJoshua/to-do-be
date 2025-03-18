import express from "express";
import Todo from "../models/models";

const router = express.Router();

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Get all todos
 *     description: Retrieve a list of all todos.
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
 *                   _id:
 *                     type: string
 *                     example: "65fd5d4f2d59e45a78b6e9e4"
 *                   title:
 *                     type: string
 *                     example: "Complete Swagger Docs"
 *                   completed:
 *                     type: boolean
 *                     example: false
 *       500:
 *         description: Server error
 */
router.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Error fetching todos" });
  }
});

/**
 * @swagger
 * /todos:
 *   post:
 *     summary: Create a new todo
 *     description: Add a new todo item to the database.
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
 *               completed:
 *                 type: boolean
 *                 example: false
 *     responses:
 *       201:
 *         description: Todo created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "65fd5d4f2d59e45a78b6e9e4"
 *                 title:
 *                   type: string
 *                   example: "Buy groceries"
 *                 completed:
 *                   type: boolean
 *                   example: false
 *       400:
 *         description: Bad request
 */
router.post("/todos", async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json({ error: "Error creating todo" });
  }
});

export default router;
