import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/home");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="login-container">
      <p>Login</p>
      <form>
        <div className="login-container_input">
          <label htmlFor="email-address">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login-container_input">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button onClick={onLogin}>Login</button>
        </div>
      </form>
      <p className="text-sm text-white text-center">
        No account yet? <NavLink to="/">Sign up</NavLink>
      </p>
    </div>
  );
}
