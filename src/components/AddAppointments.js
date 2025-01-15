import React from 'react'
import { Card,Col,Row,Form, Button } from 'react-bootstrap'

const AddAppointments = () => {
  return (
     <>
        <Col md="8">
            <Card className='mb-3'>
                <Card.Header>
                    AddAppointments
                </Card.Header>
                <Card.Body>
                    <Form>
                    <Row className='mb-3'>
                        <Form.Group as={Col}>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type='text' placeholder='first nmae' />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type='text' placeholder='last name' />
                        </Form.Group>
                    </Row>

                    <Form.Group as={Col} className='mb-3'>
                        <Form.Label>Appointment date</Form.Label>
                        <Form.Control type='date' />
                    </Form.Group>
                    <Form.Group as={Col} className='mb-3'>
                        <Form.Label>Appointment time</Form.Label>
                        <Form.Control type='time' />
                    </Form.Group>
                    <Form.Group as={Col} className='mb-3'>
                        <Form.Label>Comments</Form.Label>
                        <Form.Control as='textarea' placeholder='comments' />
                    </Form.Group>

                    <Button variant='primary'>Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Col>
     </>
  )
}

export default AddAppointments