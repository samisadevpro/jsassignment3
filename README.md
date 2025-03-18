# JavaScript Frameworks - Lab Assignment 3

## Project Overview

This project is a demonstration of using **Node.js, Express.js, and JSON** to build a simple API with CRUD operations. The assignment consists of three JavaScript files:

1. **File 1:** Displays group names on the home page (`/`).
2. **File 2:** Reads and displays JSON data from a local file.
3. **File 3:** Implements CRUD operations using Express.

## Technologies Used

- **Node.js**
- **Express.js**
- **Nodemon** (for automatic server restarts)
- **Postman** (for testing API requests)

## Installation and Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/samisadevpro/jsassignment3.git
   cd jsassignment3
   Install dependencies:
   ```

sh
Copy
Edit
npm install
Run the server with Nodemon:

sh
Copy
Edit
npm start
Open your browser and visit:

arduino
Copy
Edit
http://localhost:3000
API Endpoints
Method Endpoint Description
GET / Displays group names
GET /data Returns JSON file content
POST /add Adds a new entry
PUT /update/:id Updates an entry
DELETE /delete/:id Deletes an entry
Testing with Postman
Start the server (npm start).
Open Postman and send requests to http://localhost:3000.
Capture a screenshot of successful CRUD operations for submission.
Author
Samartha Rawal
Prakriti Karki
