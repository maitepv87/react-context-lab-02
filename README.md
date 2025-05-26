# React-Context-Lab-02  

## Description  
React-Context-Lab-02 is a testing lab built with **React**, **Context API**, and **Axios**, designed to explore efficient state management and CRUD operations with a **mock API**. This project allows hands-on experimentation with:  

- Implementing global state management using **Context API**  
- Fetching, creating, updating, and deleting book records with **Axios**  
- Managing API calls using **custom hooks (`useBooksContext`)**  
- Simulating data persistence using **JSON Server**  
- Structuring components with modular and reusable logic  

It serves as a structured sandbox for understanding **state management using Context API** with **CRUD operations via an external API**.  

## Technologies Used  
- **React** – Component-based UI development  
- **Context API** – Global state management without Redux  
- **Axios** – Promise-based HTTP client for API requests  
- **JSON Server** – Mock API for simulating backend interactions  
- **PropTypes** – Runtime validation for React components  
- **Vite** – Fast build tool for modern development  

## Getting Started  

### Installation & Setup  
To run the project locally, follow these steps:  

#### Clone the repository  
```bash
git clone https://github.com/maitepv87/react-context-lab-02.git
cd react-context-lab-02
npm install
npm run dev

Install JSON Server
npm install -g json-server

Start the server
json-server -p 3001 --watch db.json

Available API Endpoints
GET http://localhost:3001/books
POST http://localhost:3001/books
Content-Type: application/json

{
    "title": "Harry Potter"
}
PUT http://localhost:3001/books/1
Content-Type: application/json

{
    "title": "Dark Tower"
}
DELETE http://localhost:3001/books/1
