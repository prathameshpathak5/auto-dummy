import Divider from "@mui/material/Divider";
import React from "react";
import "./Login.css";
import Social from "./smedia/Social";
const Login = (props) => {
  const {
    email,
    setEmail,
    setPassword,
    password,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;
  return (
    <div className="page">
      <div className="cover">
        <h1>LOGIN</h1>
        <h6>USERNAME</h6>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="username"
        />
        <p className="errorMsg">{emailError}</p>
        <h6>PASSWORD</h6>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button id="bt" onClick={handleLogin}>
                Sign In
              </button>
              <p style={{ color: "black" }}>
                Don't have an account ?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
              </p>
            </>
          ) : (
            <>
              <button id="bt" onClick={handleSignup}>
                Sign Up
              </button>
              <p style={{ color: "black" }}>
                Have an account ?
                <span
                  onClick={() => {
                    // console.log("clicked");
                    setHasAccount(!hasAccount);
                  }}
                >
                  Sign In
                </span>
              </p>
            </>
          )}
        </div>
        <div>
          <Divider>Or</Divider>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Login;
