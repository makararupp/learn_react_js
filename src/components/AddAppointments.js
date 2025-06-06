
import { Card,Col,Row,Form, Button } from 'react-bootstrap';
import { useState } from 'react';


const AddAppointments = ({lastId,onSendAppointment}) => {
     
    const  clearData = {
        firstName: '',
        lastName: '',
        aptDate: '',
        aptTime: '',
        aptNotes: ''
    }

    let [toggleForm, setToggleForm] = useState(false);
    let [formData, setFormData] = useState(clearData);

    function fromDataPuclish(){
        const appointmentInfo ={
            id : lastId  + 1,
            firstName: formData.firstName,
            lastName: formData.lastName,
            aptDate: formData.aptDate + ' ' + formData.aptTime,
            aptNotes: formData.aptNotes
        }
        onSendAppointment(appointmentInfo);
        setFormData(clearData);
        setToggleForm(!toggleForm);
    }

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
                            <Form.Control type='text' placeholder='first name' id='firstName'
                            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                            />
                        </Form.Group>
                        
                        <Form.Group as={Col}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type='text' placeholder='last name' id='lastName'
                            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                            />
                        </Form.Group>
                    </Row>

                    <Form.Group as={Col} className='mb-3'>
                        <Form.Label>Appointment date</Form.Label>
                        <Form.Control type='date'  id='aptDate'
                        onChange={(e) => setFormData({...formData, aptDate: e.target.value})}
                        />
                    </Form.Group>

                    <Form.Group as={Col} className='mb-3'>
                        <Form.Label>Appointment time</Form.Label>
                        <Form.Control type='time' id='aptTime'
                        onChange={(e) => setFormData({...formData, aptTime: e.target.value})}
                        />
                    </Form.Group>

                    <Form.Group as={Col} className='mb-3'>
                        <Form.Label>Comments</Form.Label>
                        <Form.Control as='textarea' placeholder='comments' id="aptNotes"
                        onChange={(e) => setFormData({...formData, aptNotes: e.target.value})}
                        />
                    </Form.Group>

                    <Button variant='primary' onClick={fromDataPuclish}>Submit</Button>
                    </Form>
                </Card.Body>
                }
            </Card>
        </Col>
     </>
  )
}

export default AddAppointments