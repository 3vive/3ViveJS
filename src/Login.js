import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Card, Button, ButtonGroup, Form, Container, Row, Col } from 'react-bootstrap';

class Login extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default Login
