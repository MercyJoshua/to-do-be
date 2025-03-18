Todo App Backend

This is the backend for the Todo application built with [NestJS/Express.js].  
It provides a RESTful API for managing todos.

Features
- CRUD operations for todos (Create, Read, Update, Delete)
- Database integration with MongoDB/PostgreSQL/MySQL
- API documentation with Swagger/Postman
- Input validation and error handling

---

 Installation & Setup

 1️ Clone the repository**
```sh
git clone https://github.com/yourusername/todo-app-backend.git
cd todo-app-backend
2️ Install dependencies
npm install

3️ Set up environment variables

Create a .env file in the root directory and add the following:

PORT=5000
DATABASE_URL=your-database-url

4️ Run the server

For development:

npm run dev

For production:

npm start

API Documentation

The API is documented using Swagger and accessible at:

https://app.swaggerhub.com/apis-docs/MercyJoshua/TodoMaster_API/1.0.0

If running locally, access it via:

http://localhost:5000/api-docs

Alternatively, check the Postman collection:

This backend is deployed on Render
➡️ Live API URL: https://your-backend-url.onrender.com
📂 Folder Structure

/src
  ├── controllers  # API controllers
  ├── services     # Business logic
  ├── models       # Database schemas
  ├── routes       # API routes
  ├── middleware   # Auth & validation middleware

📌 Technologies Used

    Node.js + Express.js/NestJS
    TypeScript
    MongoDB
    Mongoose
    Swagger

