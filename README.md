# RTK Query Todo Backend

This is the backend API repository for the RTK Query Todo App. It provides the necessary server-side functionality for managing todos.

## Features

- RESTful API endpoints for CRUD operations on todos
- JSON data storage for persisting todos
- Integration with RTK Query on the client side

## Technologies Used

- Node.js
- Express
- MongoDB 
- Mongoose (for MongoDB integration)

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- MongoDB database

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/rtk-query-todo-backend.git
   ```

2. Navigate to the project directory:

   ```shell
   cd rtk-query-todo-backend
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Set up the database:

   - Configure the MongoDB connection in `config.js`.
5. Set up the .env file:
    ```shell
      MONGO_URL = mongodb://0.0.0.0:27017/todo_redux
      PORT = 3004
    ```

6. Start the server:

   ```shell
   npm run start
   ```


   The server will run on `http://localhost:3004` by default.

## API Documentation

### Todos

- `GET /api/todos`: Get all todos
- `POST /api/todos`: Create a new todo
- `PUT /api/todos/:id`: Update a todo
- `DELETE /api/todos/:id`: Delete a todo



## Contributing

Contributions are welcome! If you have any ideas, improvements, or bug fixes, please submit a pull request. Make sure to include detailed information about the changes made.

