
# Quiz Application - Backend (Node.js, Express, MongoDB)

This project is a RESTful API for a basic online quiz application. The API handles user authentication and quiz management. The project uses Node.js, Express, and MongoDB to provide functionality for user registration, login, creating quizzes, and taking quizzes.
## Features
User Authentication: Users can register and log in.

MCQ Quiz Management: Users can create, take, and view quizzes.

Tech Stack: Node.js, Express.js, MongoDB, JWT for authentication.
## Setting up the project 

Clone this repository to your local machine:

```bash
git clone https://github.com/last-hop/quiz-app-backend.git
cd quiz-app-backend
```
 Navigate to the project directory:
```bash
cd react-project
```
Install dependencies:

```bash
npm install
```
Create a .env file in the root directory and configure the following environment variables:

```bash
MONGO_URI=mongodb://localhost:27017/your-database-name
PORT=5000
JWT_SECRET=your-secret-key
```
Replace your-database-name with the actual name of your MongoDB database. If you're using MongoDB Atlas, use the URI provided by Atlas.

Start the server:

```bash
npm start
```
## Dependencies

Express: Fast, minimalist web framework for Node.js

Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js

dotenv: Loads environment variables from .env file

cors: Enables Cross-Origin Resource Sharing

jsonwebtoken: For handling authentication via JWT

