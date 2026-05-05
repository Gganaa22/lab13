const request = require('supertest');
const app = require('../src/server');

describe('Task Tracker API', () => {
  let taskId;

  test('GET / should return API information', async () => {
    const res = await request(app).get('/');

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Personal Task Tracker API');
  });

  test('GET /tasks should return an array', async () => {
    const res = await request(app).get('/tasks');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /tasks should create a task', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({
        title: 'Finish homework',
        dueDate: '2026-05-05',
        priority: 'high',
        label: 'school'
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Finish homework');
    expect(res.body.priority).toBe('high');
    expect(res.body.label).toBe('school');

    taskId = res.body.id;
  });

  test('POST /tasks should reject empty title', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({ title: '' });

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe('Task title is required');
  });

  test('GET /tasks?search=Finish should find task by title', async () => {
    const res = await request(app).get('/tasks?search=Finish');

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test('GET /tasks?priority=high should filter by priority', async () => {
    const res = await request(app).get('/tasks?priority=high');

    expect(res.statusCode).toBe(200);
    expect(res.body[0].priority).toBe('high');
  });

  test('GET /tasks?label=school should filter by label', async () => {
    const res = await request(app).get('/tasks?label=school');

    expect(res.statusCode).toBe(200);
    expect(res.body[0].label).toBe('school');
  });

  test('PUT /tasks/:id should update task', async () => {
    const res = await request(app)
      .put(`/tasks/${taskId}`)
      .send({
        title: 'Updated homework',
        completed: true
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('Updated homework');
    expect(res.body.completed).toBe(true);
  });

  test('PUT /tasks/:id should return 404 for invalid ID', async () => {
    const res = await request(app)
      .put('/tasks/999999999')
      .send({ title: 'Invalid update' });

    expect(res.statusCode).toBe(404);
    expect(res.body.message).toBe('Task not found');
  });

  test('DELETE /tasks/:id should delete task', async () => {
    const res = await request(app).delete(`/tasks/${taskId}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Task deleted');
  });

  test('DELETE /tasks/:id should return 404 for invalid ID', async () => {
    const res = await request(app).delete('/tasks/999999999');

    expect(res.statusCode).toBe(404);
    expect(res.body.message).toBe('Task not found');
  });
});