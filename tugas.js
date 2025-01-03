// index.js
const express = require('express');
const app = express();
const port = 3000;

// Menggunakan in-memory database (untuk contoh sederhana)
let todos = [];

// Middleware untuk parsing JSON
app.use(express.json());

// Endpoint untuk mendapatkan semua tugas
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Endpoint untuk menambahkan tugas baru
app.post('/todos', (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        text: req.body.text
    };
    todos.push(newTodo);
    res.json(newTodo);
});

// Endpoint untuk menghapus tugas
app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter(todo => todo.id !== id);
    res.json({ message: 'Todo deleted' });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
