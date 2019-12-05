import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import { Card, Button, ButtonToolbar, ButtonGroup, Form, Container, Row, Col, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Messages } from './config/ValidationMessages';
var emailFieldPattern = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(com|net|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

class Login extends Component {
  constructor(props) {
    super(props);
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
        errorMessage = Messages.emailField.mandatoryField.message;
        this.showError(errorMessage, "emailField");
        isValid = false;
      }
      else{
        this.hideError();
        isValid = true;
      }
    }
    if(this.refs["passwordField"]){
      if(this.refs["passwordField"].value === null || this.refs["passwordField"].value === ""){
        errorMessage = Messages.passwordField.mandatoryField.message;
        this.showError(errorMessage, "passwordField");
        isValid =false;
      }
      else{
        this.hideError();
        isValid = true;
      }
    }
    if(isValid){
      alert("API CALL NEEDS TO BE IMPLEMENTED");
      this.setState({
        email:this.refs["emailField"].value,
        password:this.refs["passwordField"].value
      });
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
      var value = this.refs["emailField"].value
      if( value === null || value === ""){
        errorMessage = Messages.emailField.mandatoryField.message;
        this.showError(errorMessage, "emailField");
      }
      else if(!emailFieldPattern.test(value)){
        errorMessage = Messages.emailField.invalidFormat.message;
        this.showError(errorMessage, "emailField");
      }
      else{
        this.hideError("emailField");
      }
    }
    else if(this.refs["passwordField"]){
      var value = this.refs["passwordField"].value
      if( value === null || value === ""){
        errorMessage = Messages.passwordField.mandatoryField.message;
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
    this.setState({
      error:error,
      validated:true
    });
  }
  render(){
    var error = this.state.error;
    var emailErrorField = "";
    if(error.emailField){
      emailErrorField = <Form.Control.Feedback className="loginFormFeedback" type={error.emailField.type}>{error.emailField.message}</Form.Control.Feedback>
    }
    var passwordErrorField = "";
    if(error.passwordField){
      passwordErrorField = <Form.Control.Feedback className="loginFormFeedback" type={error.passwordField.type}>{error.passwordField.message}</Form.Control.Feedback>
    }
    return(
      <Container>
        <Row>
          <Col>
            <Card bg="success" border="dark" text="white" style={{width: '30rem'}}>
              <Card.Header as="h4" className="loginCardHeader"><i className="loginCardHeaderIcon"><FontAwesomeIcon icon={"audio-description"}/></i>Pass</Card.Header>
              <Card.Body className="loginCardBody">
                  <Form validated={this.state.validated}>
                    <Form.Group controlId="formGroupEmail">
                      <Form.Label className="loginFormLabel">Email Address</Form.Label>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text id="inputGroupPrepend"><i><FontAwesomeIcon icon={"envelope"}/></i></InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type="email" ref="emailField" placeholder="Enter email" size="lg" required onChange={this.handleChange} value={this.state.email}/>
                        {emailErrorField}
                      </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                      <Form.Label className="loginFormLabel">Password</Form.Label>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text id="inputGroupPrepend"><i><FontAwesomeIcon icon={"key"}/></i></InputGroup.Text>
                        </InputGroup.Prepend>
                      <Form.Control type="password" ref="passwordField" placeholder="Password" size="lg" required onChange={this.handleChange} value={this.state.password}/>
                      {passwordErrorField}
                      </InputGroup>
                    </Form.Group>
                  </Form>
              </Card.Body>
              <Card.Footer className="loginCardFooter text-center">
                <Button id="submitButton" variant="primary" size="lg" className="mr-4" onClick={this.handleSubmit}>Login</Button>
                <Button id="cancelButton" variant="secondary" size="lg" onClick={this.handleCancel}>Cancel</Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default Login
