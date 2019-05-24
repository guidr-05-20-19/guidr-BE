const server = require('../server');
const request = require('supertest');
const db = require('./dbConfig');

beforeEach(async () => {
  await db('users').truncate();
});

describe('users database', () => {  
  describe('get req to /user', () => {
    it('should return status code 200', async () => {
      let res = await request(server).get('/user')
      expect(res.status).toBe(200)
    })
    it('should return an empty array for user without data', async () => {
      let res = await request(server).get('/user')
      expect(res.body).toEqual([])
    })
  })
  describe('post req to /user', () => {
    it('should return json', async () => {
      let res = await request(server)
        .post('/user')
        .send({ username: 'Azra', name: 'Azra Panjwani', location: 'San Francisco, California' })
      expect(res.type).toBe('application/json')
    })
  })
}) 