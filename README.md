# Node.js + MongoDB CRUD API

This project is a simple **RESTful API** built using **Node.js**, **Express**, and **MongoDB**. It demonstrates basic **CRUD operations** on a MongoDB database.

----

## 🚀 Features

- ✅ Connect to MongoDB using Mongoose
- ✅ Create a new user (POST)
- ✅ Get all users (GET)
- ✅ Update a user by ID (PUT)
- ✅ Delete a user by ID (DELETE)

-----

## 📁 Project Structure

NODE JS TUTORIAL/
├── models/
│ └── User.js           # Mongoose schema for User
├── node_modules/       # Installed dependencies
├── db.js               # MongoDB connection setup
├── server.js           # Main server file with routes
├── package.json        # Project metadata and dependencies
├── .gitignore          # Ignored files (e.g., node_modules)
└── README.md           # Project documentation

-----

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**

------

## 💻 How to Run Locally

1. Clone the repository  
2. Run `npm install` to install dependencies  
3. Update the MongoDB connection string directly in `db.js` file  
4. Run `npm run dev` to start the server  
5. Access API endpoints at `http://localhost:3000`
