'use strict'

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('Testing With Endpoint', (t) => {
  request(app)
  .get('/groot?message=hello')
  .expect(200)
  .expect({
    received: 'hello',
    translated: 'I am groot'
  })
  .end((err, res) => {
    if (err) throw err;
    t.same(res.body, { received: 'hello', translated: 'I am groot' }, 'ok');
    t.end();
  })
})