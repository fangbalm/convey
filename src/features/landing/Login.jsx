import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {Button, Alert, Row, Col} from 'react-bootstrap';
import LeftSide from './LeftSide';
import RightSide from "./RightSide";

function Login({setCurrentUser}) {
  
//   console.log(user)
  return (
    <div className="Login">
      <Row className="landing">
        <Col ><LeftSide setCurrentUser={setCurrentUser} /></Col>
        
        <Col ><RightSide /></Col>
      </Row>
    </div>
  );
}

export default Login;