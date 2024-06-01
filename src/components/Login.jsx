import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
import { useAuth } from "../AuthContext.jsx";
import { NavLink, useNavigate, Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const { setCurrentUser, currentUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) navigate("/");
  }, [currentUser]);

  const onLogin = (e) => {
    e.preventDefault();
    setError("");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setCurrentUser(user);
        navigate("/");
        setShowNav(true);
        setShowCategory(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        let errorMessage = "";

        switch (errorCode) {
          case "auth/invalid-email":
            errorMessage = "Email is not valid";
            break;
          case "auth/invalid-credential":
            errorMessage ="Email not found. Please check your email or sign up.";
            break;
          case "auth/user-not-found" || "auth/invalid-credential":
            errorMessage = "Email not found. Please check your email or sign up.";
            break;
          case "auth/wrong-password":
            errorMessage = "Incorrect password. Please try again.";
            break;
          default:
            errorMessage = "An error occurred. Please try again later.";
            break;
        }

        setError(errorMessage);
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="login-container">
      <div className="login-container_top-div">
        <Link to="/" onClick={() => setShowNav(true)}>
          Go Home
        </Link>
      </div>
      <p>Login</p>
      {error && <p className="error">{error}</p>}
      <form>
        <div className="login-container_input">
          <label htmlFor="login-email">Email address</label>
          <input
            id="login-email"
            name="email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login-container_input">
          <label htmlFor="password">Password</label>
          <input
            id="login-password"
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
