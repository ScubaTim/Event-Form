const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../index');
const api = supertest(app)
const EventForm = require('../models/eventForm');


test('forms are returned as json', async () => {
    await api
        .get('/')
        .expect(200)
        .expect('Content-Type', '/application\/json/')
})

beforeEach(async () => {
    await EventForm.deleteMany({})
})



afterAll(() => {
    mongoose.connection.close()
})