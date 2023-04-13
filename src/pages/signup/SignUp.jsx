import React, { useState } from "react";
import "./SingUp.css";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState(false);

  const history = useNavigate();
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSignUp = async () => {
    const res = await axios.post("http://localhost:4005/user/signup", {
      username,
      password,
    });
    const data = await res.data;
    if (data.type === "success") {
      console.log(res.data);
      setStatus("success");
      history("/login");
    } else {
      setStatus("failed");
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
          <h3>SignUp</h3>

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
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={handleConfirmPassword}
            ></input>
            <button onClick={handleSignUp} className="button-field">
              Sign Up
            </button>
            <div className="form-link">
              <span>
                Already have an account?
                <a href="/Login"> Login</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <h2>status: {!status ? "failed" : "success"}</h2>
    </section>
  );
}

export default SignUp;
