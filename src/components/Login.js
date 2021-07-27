import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../API";

//compone
import Button from "./Button";
//styles
import { Wrapper } from "./Login.styles";
//context
import { Context } from "../context";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const [user, setUser] = useContext(Context);
  let navigate = useNavigate();

  const handleSubmit = async () => {
    setError(false);
    try {
      const requestToken = await API.getRequestToken();
      const sessionId = await API.authenticate(
        requestToken,
        username,
        password
      );
      setUser({ sessionId: sessionId.session_id, username });
      navigate("/");
    } catch (err) {
      setError(true);
    }
  };
  const handleInput = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
  };

  return (
    <Wrapper>
      {error && <div className="error">An error occured</div>}
      <label>Username</label>
      <input
        type="text"
        value={username}
        name="username"
        onChange={handleInput}
      />
      <label>Password</label>
      <input
        type="password"
        value={password}
        name="password"
        onChange={handleInput}
      />
      <Button text="Login" callback={handleSubmit} />

      <p>
        Ensure you have an account on themoviedb before signing in. If you do
        not kindly create an account{" "}
        <a href="https://www.themoviedb.org/">here</a>
      </p>
    </Wrapper>
  );
};

export default Login;
