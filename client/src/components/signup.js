import React from "react";
import { useState } from "react";
import { Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import {EyeInvisibleOutlined} from "@ant-design/icons";

export default function loginPage() {
  const [info, setInfo] = useState({
    username: "",
    password: "",
    ConfirmPassword: "",
    RegNo:"",
    email:"",
  });

  function GoogleAuth() {
    console.log("Google auth link working");
  }

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  function handlechange(event) {
    const { name, value } = event.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  }
  function handleSubmit() {
    console.log("submitted biatch");
    console.log(info);
  }

  return (
    <div>
      <div class="box-form">
        <div class="left">
          <div class="overlay">
            <h1>Hello World.</h1>

            <span onClick={GoogleAuth}>Signup with Google</span>
          </div>
        </div>

        <div class="right">
          <h5>Sign-Up</h5>
          <div class="inputs">
          <input
              type="email"
              placeholder="E-mail"
              name="email"
              value={info.email}
              onChange={handlechange}
            />
            <input
              type="text"
              placeholder="Name"
              name="username"
              value={info.username}
              onChange={handlechange}
            />
            <input
              type="number"
              placeholder="Registration Number"
              name="RegNo"
              value={info.RegNo}
              onChange={handlechange}
            />
            <br />
            <div className="password-input-container">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={info.password}
                onChange={handlechange}
              />
              <div className="eye-icon" onClick={togglePasswordVisibility}>{passwordVisible ? <EyeOutlined/>:<EyeInvisibleOutlined/>}</div>
            </div>
            <input
                type="password"
                name="ConfirmPassword"
                placeholder="Confirm Password"
                value={info.ConfirmPassword}
                onChange={handlechange}
              />
          </div>
              <br/>
              <br/>
          <div class="remember-me--forget-password">
            <Button type="link">forgot password?</Button>
          </div>

          <br />
          <button className="loginkru" onClick={handleSubmit}>
            Sign-Up
          </button>
        </div>
      </div>
    </div>
  );
}
