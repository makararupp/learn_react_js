import { CiSearch } from "react-icons/ci";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Button,Container, Col,Row} from 'react-bootstrap';
 
function App() {
  return (
    <div className="App">
        <Container>
        <Row>
          <Col md={3}>
            <h3>Hello, bootstrap</h3>
          </Col>
          <Col md={3}>
            <h3>Hello, bootstrap</h3>
          </Col>
          <Col md={3}>
            <h3>Hello, bootstrap</h3>
          </Col>
          <Col md={3}>
            <h3>Hello, bootstrap</h3>
          </Col>
        </Row>
        </Container> 

        <h1>Find me right now <CiSearch/></h1>
        <Button>Hello</Button>
    </div>
  );
}

export default App;
