import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
import { useAuth } from "../AuthContext.jsx";
import { NavLink, useNavigate, Link } from "react-router-dom";
import "./Login.css";

export default function Login({ setShowNav }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrentUser, currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
     navigate("/");
    }
  }, [currentUser]);


  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setCurrentUser(user);
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

    setShowNav(true);
  };

  return (
    <div className="login-container">
      <div className="login-container_top-div">
        <Link to="/" onClick={() => setShowNav(true)}>
          Go Home
        </Link>
      </div>
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
        No account yet? <NavLink to="/signup">Sign up</NavLink>
      </p>
    </div>
  );
}
