// index.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Sample in-memory data
let data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

// Get all items
app.get('/items', (req, res) => {
  res.json(data);
});

// Get a specific item by ID
app.get('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = data.find((item) => item.id === itemId);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Create a new item
app.post('/items', (req, res) => {
  const newItem = req.body;
  newItem.id = data.length + 1;
  data.push(newItem);
  res.status(201).json(newItem);
});

// Update an existing item by ID
app.put('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedItem = req.body;

  data = data.map((item) => (item.id === itemId ? { ...item, ...updatedItem } : item));

  res.json({ message: 'Item updated successfully' });
});

// Delete an item by ID
app.delete('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  data = data.filter((item) => item.id !== itemId);
  res.json({ message: 'Item deleted successfully' });
});


console.log("Hello, World!");


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
