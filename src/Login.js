import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import { Card, Button, ButtonToolbar, ButtonGroup, Form, Container, Row, Col, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Login extends Component {
  constructor(props) {
    super(props);
    //BIND THE METHODS WITH THIS REFERENCE
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showError = this.showError.bind(this);
    this.hideError = this.hideError.bind(this);
    this.state = {
      validated: false,
      email:"",
      password:"",
      error:[]
    }
  }
  handleSubmit(event){
    console.log(event);
    window.curevent = event;
    var errorMessage= "";
    if(this.refs["emailField"]){
      if(this.refs["emailField"].value === null || this.refs["emailField"].value === ""){
        errorMessage = "Email Address is required.";
        this.showError(errorMessage, "emailField");
      }
      else{
        this.hideError();
      }
    }
    if(this.refs["passwordField"]){
      if(this.refs["passwordField"].value === null || this.refs["passwordField"].value === ""){
        errorMessage = "Password is required.";
        this.showError(errorMessage, "passwordField");
      }
      else{
        this.hideError();
      }
    }
  }
  handleCancel(){
    this.setState({
      validated: false,
      email:"",
      password:"",
      error:[]
    });
  }
  handleChange(){
    var errorMessage = "";
    if(this.refs["emailField"]){
      if(this.refs["emailField"].value === null || this.refs["emailField"].value === ""){
        errorMessage = "Email Address is required.";
        this.showError(errorMessage, "emailField");
      }
      else{
        this.hideError("emailField");
      }
    }
    else if(this.refs["passwordField"]){
      if(this.refs["passwordField"].value === null || this.refs["passwordField"].value === ""){
        errorMessage = "Password is required.";
        this.showError(errorMessage, "passwordField");
      }
      else{
        this.hideError("passwordField");
      }
    }
    this.setState({
      email:this.refs["emailField"].value,
      password:this.refs["passwordField"].value
    });
  }
  showError(errorMessage, currentRef){
    var error = this.state.error;
    error[currentRef] = {};
    error[currentRef]["message"] = errorMessage;
    error[currentRef]["type"] = "invalid";
    console.log("error");
    console.log(error);
    window.error = error;
    this.setState({
      error:error,
      validated:true
    });
  }
  hideError(currentRef){
    var error = this.state.error;
    error[currentRef] = {};
    error[currentRef]["message"] = "";
    error[currentRef]["type"] = "valid";
    console.log("hide ERROR");
    console.log(error);
    this.setState({
      error:error,
      validated:true
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
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text id="inputGroupPrepend"><i><FontAwesomeIcon icon={"envelope"}/></i></InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type="email" ref="emailField" placeholder="Enter email" required onChange={this.handleChange} value={this.state.email}/>
                        <Form.Control.Feedback type={(this.state.error && this.state.error["emailField"]) ? this.state.error["emailField"]["type"] : "valid"}>{(this.state.error && this.state.error["emailField"]) ? this.state.error["emailField"]["message"] : ""}</Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                      <Form.Label>Password</Form.Label>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text id="inputGroupPrepend"><i><FontAwesomeIcon icon={"key"}/></i></InputGroup.Text>
                        </InputGroup.Prepend>
                      <Form.Control type="password" ref="passwordField" placeholder="Password" required onChange={this.handleChange} value={this.state.password}/>
                      <Form.Control.Feedback type={(this.state.error && this.state.error["passwordField"]) ? this.state.error["passwordField"]["type"] : "valid"}>{(this.state.error && this.state.error["passwordField"]) ? this.state.error["passwordField"]["message"] : ""}</Form.Control.Feedback>
                      </InputGroup>
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
