import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import {Container, Row, Col } from 'react-bootstrap';
import Login from './Login';
class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render(){
    return(
      <Container>
        <Row>
          <Col>
            <Login/>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default App
