const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const EventForm = require('./models/eventForm');

app.use(cors());
app.use(express.json());
app.use(express.static('build'))

app.get('/', (request, response) => {
    EventForm.find({}).then(forms => {
        response.json(forms)
        console.log(forms)
    })
})

app.post('/', (request, response) => {
    const form = request.body;
    console.log(form);

    if (!form) {
        return response.status(400).json({ error: 'Content missing ' })
    };

    const eventform = new EventForm({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email
    })

    eventform.save().then(savedEventForm => {
        console.log(savedEventForm);

        return response.json(savedEventForm);
    })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})