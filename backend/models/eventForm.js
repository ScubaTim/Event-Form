const mongoose = require('mongoose');

const url = process.env.MONGODB_URI;

console.log('Connecting to ', url);

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(result => {
        console.log('Connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB', error.message)
    });

const eventFormSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    eventDate: Date
});

module.exports = mongoose.model('EventForm', eventFormSchema);
