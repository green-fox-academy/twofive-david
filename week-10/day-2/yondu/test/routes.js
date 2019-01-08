'use strict'

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test("testing with distance and time", (t) => {
  request(app)
  .get('/yondu?distance=100&time=10')
  .expect(200)
  .expect('Content-type', 'application/json; charset=utf-8')
  .end((err, res) => {
    if (err)  throw err;
    t.same(res.body, {distance: '100', time: '10', speed: 10}, 'ok' );
    t.end();
  })
})

test('testing with time = 0', (t) => {
  request(app)
  .get('/yondu?time=0')
  .expect(202)
  .expect({ error: "cannot divide by zero" })
  .expect('Content-type', 'application/json; charset=utf-8')
  .end((err, res) => {
    if (err) throw err;
    t.same(res.body, { error: "cannot divide by zero" }, 'cannot divide by zero-so passed');
    t.end();
  })
})