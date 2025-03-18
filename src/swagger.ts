import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

// Define Swagger options
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "TodoMaster API",
      version: "1.0.0",
      description: "API documentation for the TodoMaster backend",
    },
    servers: [
      {
        url: "http://localhost:5000", // Change if using a different port
        description: "Local server",
      },
    ],
  },
  apis: ["./src/routes/*.ts"], // Path to API route files
};

// Initialize Swagger documentation
const swaggerDocs = swaggerJsDoc(swaggerOptions);

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  console.log("📄 Swagger documentation available at: http://localhost:5000/api-docs");
};
