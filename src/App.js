import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import {Container, Row, Col } from 'react-bootstrap';
import Login from './Login';
/* ----------------------------INITIALIZATION FOR FONT AWESOME ICONS - TO USE IT GLOBALLY THROUGH OUT THE APPLICATION --------------------------------------------*/
import { library } from '@fortawesome/fontawesome-svg-core';
import {faEnvelope, faBars, faUserCircle, faUser, faUserSlash, faUserSecret, faUsers, faCogs, faList, faTv, faRulerHorizontal, faUserFriends, faUserCog, faLink, faTasks, faSignOutAlt, faKey, faChartLine, faChartPie,
faCog, faSearch, faEdit, faClone, faPaperPlane, faThumbsUp, faThumbsDown, faListAlt, faUnlockAlt, faLayerGroup, faSitemap} from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope, faBars, faUserCircle, faUser, faUserSlash, faUserSecret, faUsers, faCogs, faList, faTv, faRulerHorizontal, faUserFriends, faUserCog, faLink, faTasks, faSignOutAlt, faKey, faChartLine, faChartPie,
faCog, faSearch, faEdit, faClone, faPaperPlane, faThumbsUp, faThumbsDown, faListAlt, faUnlockAlt, faLayerGroup, faSitemap);
/* ---------------------------- INITIALIZATION ENDS -----------------------------------------------------------------------------------------------------------*/
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
