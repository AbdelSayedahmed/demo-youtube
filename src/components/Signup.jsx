import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";
import { auth } from "../firebase.js";
import { useAuth } from "../AuthContext.jsx";
import "./Signup.css";

export default function Signup() {
  const { setShowNav, setShowCategory, setCurrentUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setShowNav(false);
    setShowCategory(false);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      if (signInMethods.length > 0) {
        setError("Email is already in use. Please use a different email.");
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        setCurrentUser(user.uid);
        navigate("/");
        setShowNav(true);
        setShowCategory(true);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-container_top-div">
        <Link to="/" onClick={() => setShowNav(true)}>
          Go Home
        </Link>
      </div>
      <h1>Signup</h1>
      {error && <p className="error">{error}</p>}
      <form>
        <div className="signup-container_input">
          <label htmlFor="email-address">Email address</label>
          <input
            id="email"
            type="email"
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="signup-container_input">
          <label htmlFor="password">Password</label>
          <input
            id="password"
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
