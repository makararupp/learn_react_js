import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container, Col,Row,Card, ListGroup} from 'react-bootstrap';
import Search  from "./components/Search";
import AddAppointments from "./components/AddAppointments";
import appointments from './data.json';
import AppointmentInfo from './components/AppointmentInfo';

function App() {
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
            <Search/>
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
                    {appointments.map(appointments =>(
                        <AppointmentInfo key={appointments.aptDate} appointments={appointments}/>
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
