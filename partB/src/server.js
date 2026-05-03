const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [];

// Home route
app.get('/', (req, res) => {
  res.json({
    message: 'Personal Task Tracker API',
    endpoints: [
      'GET /tasks',
      'POST /tasks',
      'PUT /tasks/:id',
      'DELETE /tasks/:id'
    ]
  });
});

// Get all tasks with optional search/filter
app.get('/tasks', (req, res) => {
  const search = req.query.search;
  const priority = req.query.priority;
  const label = req.query.label;

  let result = tasks;

  if (search) {
    result = result.filter(task =>
      task.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (priority) {
    result = result.filter(task => task.priority === priority);
  }

  if (label) {
    result = result.filter(task => task.label === label);
  }

  res.json(result);
});

// Add new task
app.post('/tasks', (req, res) => {
  const title = req.body.title;

  if (!title || title.trim() === '') {
    return res.status(400).json({
      message: 'Task title is required'
    });
  }

  const task = {
    id: Date.now(),
    title: title,
    dueDate: req.body.dueDate || null,
    priority: req.body.priority || 'medium',
    label: req.body.label || 'general',
    completed: false
  };

  tasks.push(task);
  res.status(201).json(task);
});

// Update task
app.put('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  task.title = req.body.title || task.title;
  task.dueDate = req.body.dueDate || task.dueDate;
  task.priority = req.body.priority || task.priority;
  task.label = req.body.label || task.label;
  task.completed = req.body.completed ?? task.completed;

  res.json(task);
});

// Delete task
app.delete('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  const beforeCount = tasks.length;

  tasks = tasks.filter(t => t.id !== id);

  if (tasks.length === beforeCount) {
    return res.status(404).json({
      message: 'Task not found'
    });
  }

  res.json({ message: 'Task deleted' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});