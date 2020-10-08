require('dotenv').config();
const express = require('express');
const app = express();
const EventForm = require('./models/eventForm');


app.get('/', (request, response) => {
    EventForm.find({}).then(eventForms => {
        response.json(eventForms)
    })
});
/*
app.post('/', (request, response) => {
    const body = request.body

    if (!body.content) {
        return response.status(400).json({ error: 'content missing' })
    }

    const eventform = new EventForm({
        firstName: 'Tim',
        lastName: 'Gentry',
        email: 'Fake.Email@gmail.com',
        eventDate: new Date()
    });

    eventform.save().then(savedForm => {
        response.json(savedForm)
    });

})
*/
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})