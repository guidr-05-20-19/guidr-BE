const server = require('../server');
const request = require('supertest');
const db = require('./dbConfig');

beforeEach(async () => {
  await db('trips').truncate();
});
  describe('post req to /trips', () => {
    it('should return json', async () => {
      let res = await request(server)
        .post('/trips')
        .send({ title: 'Two Medicine Pass', duration: '3 hours', location: 'Glacier National Park' })
      expect(res.type).toBe('application/json')
    })
  })
