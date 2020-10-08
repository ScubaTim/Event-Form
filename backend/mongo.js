const mongoose = require('mongoose');

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js {password}');
    process.exit(1);
};

const password = process.argv[2];

const url = `mongodb+srv://tim:${password}@cluster0.24njf.mongodb.net/event-form?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });

const eventFormSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    eventDate: Date
});

const EventForm = mongoose.model('EventForm', eventFormSchema);

const eventform = new EventForm({
    firstName: 'Tim',
    lastName: 'Gentry',
    email: 'Fake.Email@gmail.com',
    eventDate: new Date()
});

eventform.save().then(result => {
    console.log('Form submission saved to database!');
    mongoose.connection.close();
});
