import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import EventForm from '../../components/EventForm';

function App() {
    return (
        <Container className="App">
            <Row>
                <Col className="m-5">
                    <Card className="CARD shadow-lg">
                        <CardBody>
                            <CardTitle className="text-center mb-4">
                                <h1 className="font-weight-bold">Event&nbsp; Form</h1>
                                <hr />
                            </CardTitle>
                            <EventForm />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
