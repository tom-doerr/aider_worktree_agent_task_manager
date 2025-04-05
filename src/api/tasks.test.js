const request = require('supertest');
const app = require('../app');

describe('Task API', () => {
  it('GET /tasks should return empty array initially', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([]);
  });

  it('POST /tasks should create a new task', async () => {
    const newTask = { text: 'Test task' };
    const res = await request(app)
      .post('/tasks')
      .send(newTask);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.text).toEqual(newTask.text);
  });
});
