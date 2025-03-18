import mongoose, { Schema, Document } from "mongoose";

interface ITodo extends Document {
  title: string;
  description: string;
  status: "pending" | "completed";
  priority: "low" | "medium" | "high";
  dueDate: Date;
  createdAt: Date;
}

const TodoSchema = new Schema<ITodo>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ["pending", "completed"], default: "pending" },
    priority: { type: String, enum: ["low", "medium", "high"], default: "medium" },
    dueDate: { type: Date, required: true },
  },
  { timestamps: true }
);

const Todo = mongoose.model<ITodo>("Todo", TodoSchema);
export default Todo;
