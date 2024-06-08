# User Authentication Service

## Overview

This project implements a user authentication service using JWT in Node.js.

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with the following variables:
    ```
    PORT=5000
    MONGO_URI="mongodb+srv://athulkrishna:Athul123@mongodblearning.lt7c4gr.mongodb.net/?retryWrites=true&w=majority&appName=MongoDBLearning"
    JWT_SECRET=your_jwt_secret
    ```
4. Start the server: `npm start`

## API Documentation

### Register User

- **Endpoint**: `/api/auth/register`
- **Method**: `POST`
- **Request Body**:
    ```json
    {
        "name": "Athul Krishna",
        "email": "athulkrishna@gmail.com",
        "password": "password123"
    }
    ```

### Login User

- **Endpoint**: `/api/auth/login`
- **Method**: `POST`
- **Request Body**:
    ```json
    {
        "email": "athulkrishna@gmail.com",
        "password": "password123"
    }
    ```

### Protected Route

- **Endpoint**: `/api/protected`
- **Method**: `GET`
- **Headers**:
    ```
    x-auth-token: your_jwt_token
    ```

## Postman Collection

Import the provided Postman collection to test the APIs.

## Source Code

The complete source code is available in this repository.

## Swagger Documentation

Open your web browser and navigate to http://localhost:5000/api-docs

## Docker Run

- docker build -t auth .
- docker run -p 5000:5000 auth
