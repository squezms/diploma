import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    const res = await axios.post("http://localhost:4005/user/login", {
      username,
      password,
    });
    const data = await res.data;

    if (data.type === "success") {
      history("/");
    }
  };
  return (
    <section
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="container-login"
    >
      <div className="form-login">
        <div className="form-content">
          <h3>Login</h3>

          <div className="input-field">
            <input
              type="email"
              placeholder="Email"
              onChange={handleUsername}
            ></input>
            <input
              type="password"
              placeholder="Password"
              onChange={handlePassword}
            ></input>

            <button onClick={handleLogin} className="button-field">
              Login
            </button>
            <div className="form-link">
              <span>
                Don't have an account?
                <a href="/SignUp"> Sign Up</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
