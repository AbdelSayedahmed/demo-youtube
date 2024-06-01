import React, { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { auth } from "../firebase.js";
import { useAuth } from "../AuthContext.jsx";
import "./Signup.css";

export default function Signup() {
  const { setCurrentUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      if (signInMethods.length > 0) {
        setError("The email address is already in use. Please sign in instead.");
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        setCurrentUser(user.uid);
        navigate("/");
      }
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          setError("Invalid email address. Please enter a valid email.");
          break;
        case "auth/weak-password":
          setError("Weak password. Please choose a stronger password.");
          break;
        default:
          setError("An error occurred while signing up. Please try again later.");
          break;
      }
    }
  };  

  return (
    <div className="signup-container">
      <div className="signup-container_top-div">
        <Link to="/">
          Go Home
        </Link>
      </div>
      <h1>Sign up</h1>
      {error && <p className="error">{error}</p>}
      <form>
        <div className="signup-container_input">
          <label htmlFor="signup-email">Email address</label>
          <input
            id="signup-email"
            type="email"
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="signup-container_input">
          <label htmlFor="signup-password">Password</label>
          <input
            id="signup-password"
            type="password"
            label="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={onSubmit}>
          Sign up
        </button>
      </form>
      <p>
        Already have an account? <NavLink to="/login">Sign in</NavLink>
      </p>
    </div>
  );
}
