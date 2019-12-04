import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import { Card, Button, ButtonToolbar, ButtonGroup, Form, Container, Row, Col, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Messages } from './config/ValidationMessages';

class Login extends Component {
  constructor(props) {
    super(props);
    console.log("MESSAGES......");
    console.log(Messages);
    console.log(Messages.emailField);
    //BIND THE METHODS WHICH NEEDS THE THIS REFERENCE HERE.
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
    var errorMessage= "";
    var isValid = true;
    if(this.refs["emailField"]){
      if(this.refs["emailField"].value === null || this.refs["emailField"].value === ""){
        errorMessage = Messages.emailField.mandatoryField;
        this.showError(errorMessage, "emailField");
        isValid = false;
      }
      else{
        this.hideError();
      }
    }
    if(this.refs["passwordField"]){
      if(this.refs["passwordField"].value === null || this.refs["passwordField"].value === ""){
        errorMessage = Messages.passwordField.mandatoryField;
        this.showError(errorMessage, "passwordField");
        isValid =false;
      }
      else{
        this.hideError();
      }
    }
    // debugger;
    // if(isValid){
    //   alert("API CALL NEEDS TO BE IMPLEMENTED");
    //   this.setState({
    //     email:this.refs["emailField"].value,
    //     password:this.refs["passwordField"].value
    //   });
    // }
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
        errorMessage = Messages.emailField.mandatoryField;
        this.showError(errorMessage, "emailField");
      }
      else{
        this.hideError("emailField");
      }
    }
    if(this.refs["passwordField"]){
      if(this.refs["passwordField"].value === null || this.refs["passwordField"].value === ""){
        errorMessage = Messages.passwordField.mandatoryField;
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
              <Card.Header as="h4" className="loginCardHeader"><i className="loginCardHeaderIcon"><FontAwesomeIcon icon={"audio-description"}/></i>Pass</Card.Header>
              <Card.Body className="loginCardBody">
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
              </Card.Body>
              <Card.Footer className="loginCardFooter text-center">
                <Button id="submitButton" variant="primary" size="sm" className="mr-4" onClick={this.handleSubmit}>Login</Button>
                <Button id="cancelButton" variant="secondary" size="sm" onClick={this.handleCancel}>Cancel</Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default Login
