import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container, Col,Row,Card, ListGroup} from 'react-bootstrap';
import Search  from "./components/Search";
import AddAppointments from "./components/AddAppointments";
import AppointmentInfo from './components/AppointmentInfo';
import { useCallback, useEffect, useState } from 'react';

function App() {
  
    let [appointments, setAppointmentList] = useState([]);
    let [query, setQuery] = useState("");

    const filteredAppointments = appointments.filter(
     item =>{
      return(
        item.firstName.toLowerCase().includes(query.toLocaleLowerCase()) ||
        item.lastName.toLowerCase().includes(query.toLocaleLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLocaleLowerCase())
      )
     }
    )

    const fetchData = useCallback(() =>{
      fetch('./data.json')
      .then(response => response.json())
      .then(data =>{
        setAppointmentList(data);
      });
    },[])

    useEffect(() =>{
      fetchData()
    },[fetchData])

  return (
    <div className="App">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold mt-">List Information Search</h1>
            </Col>
          </Row>

          <Row className="justify-content-center">
              <Col md={4}>
              <Search query={query} onQueryChange={setQuery}  />
              </Col>
          </Row>
          <Row className="justify-content-center">
              <AddAppointments/>
          </Row>
          
          <Row className='justify-content-center'>
            <Col md={8}>
              <Card className='mb-3'>
                  <Card.Header>Appointment</Card.Header>
                  <ListGroup variant='flush'>
                    {filteredAppointments.map(appointments =>(
                        <AppointmentInfo key={appointments.id} appointments={appointments}
                        onDeleteAppointments={
                              appointmentId =>
                              setAppointmentList(
                                appointments.filter(
                                  appointment => appointment.id !== appointmentId)
                              )
                            }/>
                   ))}
                  </ListGroup>
              </Card>
            </Col>
          </Row>

        </Container> 
    </div>
  );
}

export default App;
