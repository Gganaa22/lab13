const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const task = {
    id: Date.now(),
    title: req.body.title,
    priority: req.body.priority || 'medium',
    completed: false
  };

  tasks.push(task);
  res.status(201).json(task);
});

app.put('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  task.title = req.body.title || task.title;
  task.priority = req.body.priority || task.priority;
  task.completed = req.body.completed ?? task.completed;

  res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  tasks = tasks.filter(t => t.id !== id);

  res.json({ message: 'Task deleted' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});