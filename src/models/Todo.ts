import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: { type: String, default: "pending" },
  priority: { type: String, enum: ["low", "medium", "high"], default: "low" },
  dueDate: Date,
  createdAt: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
});

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;
