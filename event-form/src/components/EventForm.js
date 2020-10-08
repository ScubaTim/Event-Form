import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import formService from '../services/eventForm';

const EventForm = () => {
    const [forms, setForms] = useState([]);
    //first name, last name, email, event date
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

    console.log(forms)

    return (
        <Form className="px-1">
            <FormGroup>
                <Label for="name"><h5 className="font-weight-bold text-uppercase my-0">Name</h5></Label>
                <div className="d-flex">
                    <Input className="mr-2" type="text" name="firstName" id="firstName" placeholder="First name" />
                    <Input type="text" name="lastName" id="lastName" placeholder="Last name" />
                </div>
            </FormGroup>
            <FormGroup className="my-4">
                <Label for="email"><h5 className="font-weight-bold text-uppercase my-0">Email</h5></Label>
                <Input type="email" name="email" id="email" placeholder="Enter your email" />
            </FormGroup>
            <FormGroup>
                <Label for="eventDate"><h5 className="font-weight-bold text-uppercase my-0">Event Date</h5></Label>
                <Input
                    type="date"
                    name="date"
                    id="eventDate"
                    placeholder="Event Date"
                />
            </FormGroup>
            <Button size="lg" outline block className="BUTTON font-weight-bold text-uppercase mt-4 mb-1">Submit</Button>
        </Form>
    );
}

export default EventForm;