import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container, Col,Row,Card, ListGroup} from 'react-bootstrap';
import Search  from "./components/Search";
import AddAppointments from "./components/AddAppointments";
import AppointmentInfo from './components/AppointmentInfo';
import { useCallback, useEffect, useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';
import { or } from 'ajv/dist/compile/codegen';

function App() {
  
    let [appointments, setAppointmentList] = useState([]);
    let [query, setQuery] = useState("");
    let [sortBy , setSortBy] = useState("firstName");
    let [orderBy, setOrderBy] = useState("asc");


    const filteredAppointments = appointments.filter(
     item =>{
      return(
        item.firstName.toLowerCase().includes(query.toLocaleLowerCase()) ||
        item.lastName.toLowerCase().includes(query.toLocaleLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLocaleLowerCase())
      )
     }
    ).sort((a, b) => {
        let order = orderBy === "asc" ? 1 : -1;

        const valA = a[sortBy]?.toLowerCase?.() || '';
        const valB = b[sortBy]?.toLowerCase?.() || '';

        if (valA < valB) return -1 * order;
        if (valA > valB) return 1 * order;
        return 0;
      });

      
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
              <Search 
              query={query}
              onQueryChange={setQuery}
              sortBy={sortBy}
              onSortByChange={setSortBy}
              order={orderBy}
              onOrderByChange={setOrderBy}
              />
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
