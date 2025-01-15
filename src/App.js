import { CiSearch } from "react-icons/ci";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Button,Container, Col,Row} from 'react-bootstrap';
 
function App() {
  return (
    <div className="App">

        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-light mt-">Search here<CiSearch/></h1>
              <div className="d-grid gap-2">
                  <Button size="sm">Hello</Button>
              </div>
            </Col>
          </Row>

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
    </div>
  );
}

export default App;
