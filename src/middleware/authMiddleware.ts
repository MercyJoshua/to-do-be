import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "";

// Extend Express request type to include `user`
declare global {
  namespace Express {
    interface Request {
      user?: { userId: string };
    }
  }
}

const authMiddleware = (req: any, res: any, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  console.log("🔍 Incoming Request:", req.method, req.url); // Log request method & URL
  console.log("🔑 Authorization Header:", authHeader); // Log received token

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.log("❌ No token provided");
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    console.log(" Token Verified:", decoded); // Log decoded token
    req.user = { userId: decoded.userId }; // Attach user info to request
    next();
  } catch (error) {
    console.error("❌ Token verification failed:", error);
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

export default authMiddleware;
