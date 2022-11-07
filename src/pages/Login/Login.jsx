import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";

const Login = () => {
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { userName, password });
  };
  const [userName, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="userName"
      />
      <input
        type="text"
        onChange={(e) => setpassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
