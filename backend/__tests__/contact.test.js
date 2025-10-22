const request = require('supertest');
const app = require('../server');

describe('Contact API', () => {
  it('should send a contact message', async () => {
    const response = await request(app)
      .post('/api/contact')
      .send({
        name: 'Test User',
        email: 'test@example.com',
        message: 'Hello, this is a test message.'
      })
      .expect(200);
      
    expect(response.body.success).toBe(true);
  });

  it('should return error for missing fields', async () => {
    const response = await request(app)
      .post('/api/contact')
      .send({
        name: 'Test User',
        email: 'test@example.com'
        // Missing message field
      })
      .expect(400);
      
    expect(response.body.success).toBe(false);
  });
});