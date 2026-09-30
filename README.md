# E-Commerce API

A RESTful API built with Express and MongoDB for managing products.

## Features

- Express server with MongoDB connection
- Product CRUD routes (GET, POST, PUT, DELETE)
- Input validation for product fields

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file and add your MongoDB connection string:
   ```
   MONGO_URI=your_mongodb_connection_string
   ```

3. Start the server:
   ```bash
   npm run dev
   ```

The server runs on `http://localhost:5000`.

## API Endpoints

| Method   | Endpoint                | Description          |
|----------|-------------------------|----------------------|
| GET      | `/api/product`          | Get all products     |
| GET      | `/api/product/:id`      | Get product by ID    |
| POST     | `/api/product`          | Create a new product |
| PUT      | `/api/product/:id`      | Update a product     |
| DELETE   | `/api/product/:id`      | Delete a product     |

## Sample Requests

See `project.http` for ready-to-use HTTP request examples that can be run via the VS Code **REST Client** extension or similar tools.

## Tech Stack

- Node.js
- Express
- MongoDB + Mongoose