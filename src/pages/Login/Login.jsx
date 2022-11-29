import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return ( 
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      flex: "2"
    }}>


      <input
      style={{padding: 10, marginBottom: 20}}
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <input 
      style={{padding: 10, marginBottom: 20}}
        type="password"
        onChange={(e) => setpassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleClick} style={{padding: 10, width: 100}}>Login</button>
    </div>
  );
};

export default Login;
