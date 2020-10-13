import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';

import { Row, Col, Button, Form, FormGroup, Label } from 'reactstrap';
import { Field, reduxForm } from 'redux-form/immutable';

import getAll from '../../services/getAll';
import create from '../../services/create';
import SuccessModal from '../SuccessModal';

import saga from './saga';
import reducer from './reducer';
import * as constants from './constants';
import * as actions from './actions';

const EventForm = ({ handleSubmit, onSubmit }) => {
    const [form, setForms] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [eventDate, setEventDate] = useState(null);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    // useEffect(
    //     () => {
    //         getAll
    //             .then(initialForms => {
    //                 setForms(initialForms)
    //             })
    //             .catch(error => console.log(`There was an error getting forms. ${error}`))
    //     }
    // )

    // const handleFormSubmit = (e) => {
    //     e.preventDefault();

    //     const eventForm = {
    //         firstName: firstName,
    //         lastName: lastName,
    //         email: email,
    //         eventDate: eventDate
    //     }

    //     formService
    //         .create(eventForm);

    //     setForms(form.concat(eventForm))
    //     console.log(form);
    //     setIsSuccessModalOpen(!isSuccessModalOpen);
    // }

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
        <>
            <Row>
                <Col>
                    <SuccessModal className="success-modal" isOpen={!!isSuccessModalOpen} toggle={() => setIsSuccessModalOpen(false)} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit(onSubmit)} className="px-1">
                        <FormGroup>
                            <Label for="name"><h5 className="font-weight-bold text-uppercase my-0">Name</h5></Label>
                            <div className="d-flex">
                                <Field component="input" className="mr-2 w-100 rounded p-1" type="text" name="firstName" id="firstName" placeholder="First name" onChange={handleFirstNameChange} />
                                <Field component="input" className="w-100 rounded p-1" type="text" name="lastName" id="lastName" placeholder="Last name" onChange={handleLastNameChange} />
                            </div>
                        </FormGroup>
                        <FormGroup className="my-4">
                            <Label for="email"><h5 className="font-weight-bold text-uppercase my-0">Email</h5></Label>
                            <Field component="input" className="w-100 d-block rounded p-1" type="email" name="email" id="email" placeholder="Enter your email" onChange={handleEmailChange} />
                        </FormGroup>
                        <FormGroup >
                            <Label for="eventDate"><h5 className="font-weight-bold text-uppercase my-0">Event Date</h5></Label>
                            <Field
                                component="input"
                                type="date"
                                name="date"
                                id="eventDate"
                                placeholder="Event Date"
                                onChange={handleEventDateChange}
                                className="w-100 d-block text-muted rounded p-1"
                            />
                        </FormGroup>
                        <Button size="lg" type="submit" color="white" outline block className="custom-btn font-weight-bold text-uppercase mt-4 mb-1">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </>
    );
}

const withSaga = injectSaga({ key: constants.EVENT_FORM, saga });
const withReducer = injectReducer({ key: constants.EVENT_FORM, reducer })

const formspec = {
    form: constants.EVENT_FORM,
    enableReinitialize: true,
    onSubmit: (values, dispatch) => {
        const params = values.toJS();
        dispatch(actions.onFormSubmit(params))
        console.log(params)
    }
}

export default compose(
    withReducer,
    withSaga,
    reduxForm(formspec),
)(EventForm);