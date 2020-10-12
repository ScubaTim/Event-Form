import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import formService from '../services/eventForm';

const EventForm = () => {
    const [forms, setForms] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [eventDate, setEventDate] = useState(null);

    useEffect(
        () => {
            formService
                .getAll()
                .then(initialForms => {
                    setForms(initialForms)
                })
                .catch(error => console.log(`There was an error getting forms. ${error}`))
        }
    )

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const eventForm = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            eventDate: eventDate
        }

        formService
            .create(eventForm);
    }

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    };
    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    };
    const handleEventDateChange = (e) => {
        setEventDate(e.target.value)
    };


    return (
        <Form onSubmit={handleFormSubmit} className="px-1">
            <FormGroup>
                <Label for="name"><h5 className="font-weight-bold text-uppercase my-0">Name</h5></Label>
                <div className="d-flex">
                    <Input className="mr-2" type="text" name="firstName" id="firstName" placeholder="First name" onChange={handleFirstNameChange} />
                    <Input type="text" name="lastName" id="lastName" placeholder="Last name" onChange={handleLastNameChange} />
                </div>
            </FormGroup>
            <FormGroup className="my-4">
                <Label for="email"><h5 className="font-weight-bold text-uppercase my-0">Email</h5></Label>
                <Input type="email" name="email" id="email" placeholder="Enter your email" onChange={handleEmailChange} />
            </FormGroup>
            <FormGroup>
                <Label for="eventDate"><h5 className="font-weight-bold text-uppercase my-0">Event Date</h5></Label>
                <Input
                    type="date"
                    name="date"
                    id="eventDate"
                    placeholder="Event Date"
                    onChange={handleEventDateChange}
                />
            </FormGroup>
            <Button size="lg" type="submit" outline block className="BUTTON font-weight-bold text-uppercase mt-4 mb-1">Submit</Button>
        </Form>
    );
}

export default EventForm;