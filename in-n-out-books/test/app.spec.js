/**
 * Author: Maxine Casillas
 * Date: 06/29/2026
 * File: app.spec.js
 * Description: Jest API tests for the In-N-Out-Books application.
 */

const request = require('supertest');
const app = require('../src/app');

describe('Chapter 3: API Tests', () => {
  test('Should return an array of books.', async () => {
    const response = await request(app).get('/api/books');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test('Should return a single book.', async () => {
    const response = await request(app).get('/api/books/1');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', 1);
    expect(response.body).toHaveProperty('title');
    expect(response.body).toHaveProperty('author');
  });

  test('Should return a 400 error if the id is not a number.', async () => {
    const response = await request(app).get('/api/books/abc');

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message', 'Input must be a number');
  });
});
