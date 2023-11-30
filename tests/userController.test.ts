// UserController.test.ts
import request from 'supertest';
import express from 'express';
import UserController from '../src/UserController';

const app = express();
app.use(express.json());

const userController = new UserController();
app.get('/users/:userId', userController.getUser.bind(userController));

describe('UserController', () => {
  it('should get user by ID', async () => {
    const response = await request(app).get('/users/123');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ userId: '123', message: 'User fetched successfully' });
  });
});
