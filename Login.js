import { Divider } from "@mui/material";
import React, { Component } from "react";
import "./Login.css";
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
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="username"
        />
        <p className="errorMsg">{emailError}</p>
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
              <p>
                Don't have an account ?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
              </p>
            </>
          ) : (
            <>
              <button id="bt" onClick={handleSignup}>
                {" "}
                Sign Up
              </button>
              <p>
                {" "}
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
        <Divider>Or Login With</Divider>
        <div className="alt-login">
          <div className="google"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
