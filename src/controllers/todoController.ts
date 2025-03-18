import Todo from "../models/Todo";

export const createTodo = async (req: any, res: any) => {
  try {
    const { title, description, dueDate, priority } = req.body;
    const userId = req.user?.userId; // ✅ Get user from request

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const newTodo = await Todo.create({
      title,
      description,
      dueDate,
      priority,
      userId,
    });

    res.status(201).json({ message: "Todo created successfully", todo: newTodo });
  } catch (error) {
    console.error("Error creating todo:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getTodos = async (req: any, res: any) => {
    try {
      const userId = req.user?.userId;
  
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
  
      const todos = await Todo.find({ userId }).lean(); // ✅ Convert to plain object
  
      // ✅ Rename `_id` to `id`
      const formattedTodos = todos.map(todo => ({
        id: todo._id.toString(), // ✅ Convert _id to id
        title: todo.title,
        description: todo.description,
        dueDate: todo.dueDate,
        priority: todo.priority,
        status: todo.status,
        userId: todo.userId,
      }));
  
      res.status(200).json(formattedTodos);
    } catch (error) {
      console.error("Error fetching todos:", error);
      res.status(500).json({ message: "Server error" });
    }
  };
  
  // ✅ Get a single todo by ID
export const getTodoById = async (req: any, res: any) => {
    try {
      const { id } = req.params;
      const userId = req.user?.userId; // ✅ Ensure user is authenticated
  
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
  
      const todo = await Todo.findOne({ _id: id, userId });
  
      if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
      }
  
      res.status(200).json(todo);
    } catch (error) {
      console.error("Error fetching todo:", error);
      res.status(500).json({ message: "Server error" });
    }
  };

// ✅ Update an existing todo
export const updateTodo = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const userId = req.user?.userId; // ✅ Ensure user is authenticated
    const { title, description, dueDate, priority, status } = req.body;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const todo = await Todo.findOneAndUpdate(
      { _id: id, userId }, // Ensure the user owns the todo
      { title, description, dueDate, priority, status },
      { new: true } // Return the updated document
    );

    if (!todo) {
      return res.status(404).json({ message: "Todo not found or unauthorized" });
    }

    res.status(200).json({ message: "Todo updated successfully", todo });
  } catch (error) {
    console.error("Error updating todo:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Delete a todo
export const deleteTodo = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const userId = req.user?.userId; // ✅ Ensure user is authenticated

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const todo = await Todo.findOneAndDelete({ _id: id, userId });

    if (!todo) {
      return res.status(404).json({ message: "Todo not found or unauthorized" });
    }

    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({ message: "Server error" });
  }
};
