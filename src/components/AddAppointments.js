
import { Card,Col,Row,Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const AddAppointments = () => {
    let [toggleForm, setToggleForm] = useState(false);

  return (
     <>
        <Col md="8">
            <Card className='mb-3'>
                <Card.Header>
                    AddAppointments
                    <Button size='sm' 
                    className='small float-end' 
                    onClick={() => {setToggleForm(!toggleForm)}}>+
                    </Button>
                </Card.Header>
                {toggleForm && 
                         <Card.Body>
                    <Form>
                    <Row className='mb-3'>
                        <Form.Group as={Col}>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type='text' placeholder='first name' />
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
                }
            </Card>
        </Col>
     </>
  )
}

export default AddAppointments