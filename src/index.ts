import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/config";
import { setupSwagger } from "./swagger";
// import todoRoutes from "./routes/routes";
import authRoutes from "./routes/auth";
import todoRoutes from "./routes/todo";



dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use("/todos", todoRoutes);
app.use("/auth", authRoutes);

// Connect to MongoDB before starting the server
connectDB().then(() => {
  // Swagger Documentation
  setupSwagger(app);

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});
