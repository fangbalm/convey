import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { useHistory } from 'react-router';



function LeftSide({setCurrentUser}) {    

    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 
    const history = useHistory(); 
    




  // function handleChange(e) {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: login the user
        fetch("http://localhost:3000/login", {
            method: "POST",
        })
          .then((r) => r.json())
          .then((user) => {
            setCurrentUser(user)
            history.push("/")

          } );
      };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>Username</label>
        <input
          type="text"
          name="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <br></br>
        <input type="submit" value="Login" className="login-btn" />
        <input type="submit" value="Signup" className="login-btn" />
      </form>
    </div>
    )
}

export default LeftSide;




// function handleChange(e) {
//   setFormData({ ...formData, [e.target.name]: e.target.value });
// }

