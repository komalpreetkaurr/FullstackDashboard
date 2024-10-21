import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

function LoginSignup({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [popupMessage, setPopupMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (!username || !password) {
      setPopupMessage("Please fill in all fields.");
      setIsLoading(false);
      return;
    }

    axios.post('http://localhost:8081/users', { username, password })
      .then(res => {
        setIsLoading(false);
        if (res.data.message === "Login Successful") {
          localStorage.setItem('authToken', 'dummyToken'); // Normally you'd get a token from the server
          localStorage.setItem('userData', JSON.stringify(res.data.user)); // Store user data in localStorage
          setPopupMessage("Login Successful!");

          setTimeout(() => {
            setPopupMessage("");
            onLogin(res.data.user); // Pass user data to the onLogin function
          }, 1000); // Delay before redirecting to the dashboard
        } else {
          setPopupMessage("Login Failed: " + res.data.message);
        }
      })
      .catch(err => {
        console.error('Login error:', err);
        setIsLoading(false);
        setPopupMessage("Login Failed: Network Error");
      });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!username || !email || !password) {
      setPopupMessage("Please fill in all fields.");
      setIsLoading(false);
      return;
    }

    axios.post('http://localhost:8081/signup', { username, email, password })
      .then(res => {
        setIsLoading(false);
        setPopupMessage(res.data.message || 'Signup Successful');

        setTimeout(() => {
          setPopupMessage("");
          setIsLogin(true); // Switch to login form after successful signup
        }, 1000);
      })
      .catch(err => {
        console.error('Signup error:', err);
        setIsLoading(false);
        setPopupMessage("Signup Failed: Network Error");
      });
  };

  const createDroppingText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="drop-text-char" style={{ animationDelay: `${index * 0.1}s` }}>
        {char}
      </span>
    ));
  };

  return (
    <div className="login-signup-background">
      <div className="login-signup-container">
        <div className="drop-text-container">
          <div className="drop-text">
            <h1>{createDroppingText('INFOSPHERE')}</h1>
          </div>
          <p className="description">
            The InfoSphere Dashboard is a sophisticated and intuitive data visualization tool designed to empower users
            with comprehensive insights and analytics capabilities.
          </p>
        </div>
        <div className={`form-container ${isLogin ? 'login' : 'signup'}`}>
          {isLogin ? (
            <form onSubmit={handleLogin}>
              <h2>Login</h2>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ width: '95%' }}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
              <p>
                Don't have an account? <span onClick={() => setIsLogin(false)}>Sign up</span>
              </p>
            </form>
          ) : (
            <form onSubmit={handleSignup}>
              <h2>Signup</h2>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ width: '95%' }}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" disabled={isLoading}>
                {isLoading ? 'Signing up...' : 'Sign Up'}
              </button>
              <p>
                Already have an account? <span onClick={() => setIsLogin(true)}>Log in</span>
              </p>
            </form>
          )}
        </div>
        {popupMessage && (
          <div className="popup">
            {popupMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginSignup;
