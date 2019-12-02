import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import { Card, Button, ButtonToolbar, ButtonGroup, Form, Container, Row, Col } from 'react-bootstrap';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showError = this.showError.bind(this);
    this.hideError = this.hideError.bind(this);

    this.state = {
      validated: false,
      error:[]
    }
  }
  handleSubmit(){
    var errorMessage= "";
    if(this.refs["emailField"]){
      if(this.refs["emailField"].value === null || this.refs["emailField"].value === ""){
        errorMessage = "The email field is required.";
        this.showError(errorMessage, "emailField");
      }
      else{
        this.hideError();
      }
    }
    if(this.refs["passwordField"]){
      if(this.refs["passwordField"].value === null || this.refs["passwordField"].value === ""){
        errorMessage = "The password field is required.";
        this.showError(errorMessage, "passwordField");
      }
      else{
        this.hideError();
      }
    }
  }
  handleCancel(){

  }
  handleChange(){
    var errorMessage = "";
    if(this.refs["emailField"]){
      if(this.refs["emailField"].value === null || this.refs["emailField"].value === ""){
        errorMessage = "The email field is required.";
        this.showError(errorMessage, "emailField");
      }
      else{
        this.hideError();
      }
    }
    if(this.refs["passwordField"]){
      if(this.refs["passwordField"].value === null || this.refs["passwordField"].value === ""){
        errorMessage = "The password field is required.";
        this.showError(errorMessage, "passwordField");
      }
      else{
        this.hideError();
      }
    }
  }
  showError(errorMessage, currentRef){
    var error = this.state.error;
    error[currentRef] = errorMessage;
    console.log("error");
    console.log(error);
    window.error = error;
    this.setState({
      error:error,
      validated:true
    });
  }
  hideError(){
    this.setState({
      error:[],
      validated:false
    });
  }
  render(){
    return(
      <Container>
        <Row>
          <Col>
            <Card bg="success" border="dark" text="white" style={{width: '30rem'}}>
              <Card.Header as="h4" className="">Ad Pass</Card.Header>
              <Card.Body>
                  <Form validated={this.state.validated}>
                    <Form.Group controlId="formGroupEmail">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control ref="emailField" type="email" placeholder="Enter email" required onChange={this.handleChange}/>
                      <Form.Control.Feedback type="invalid">{(this.state.error && this.state.error["emailField"]) ? this.state.error["emailField"] : ""}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control ref="passwordField" type="password" placeholder="Password" required onChange={this.handleChange}/>
                      <Form.Control.Feedback type="invalid">{(this.state.error && this.state.error["passwordField"]) ? this.state.error["passwordField"] : ""}</Form.Control.Feedback>
                    </Form.Group>
                  </Form>
                  <Button id="submitButton" variant="primary" size="sm" className="mr-4" onClick={this.handleSubmit}>Login</Button>
                  <Button id="cancelButton" variant="secondary" size="sm" onClick={this.handleCancel}>Cancel</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default Login
