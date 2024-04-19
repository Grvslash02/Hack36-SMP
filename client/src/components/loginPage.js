import React from "react";
import { useState } from "react";
import { Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";

export default function loginPage() {
  const [info, setInfo] = useState({
    email: "",
    password: "",
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

            <span onClick={GoogleAuth}>Login with Google</span>
          </div>
        </div>

        <div class="right">
          <h5>Login</h5>
          <p>
            Don't have an account? <a href="#">Create Your Account</a> it takes
            less than a minute
          </p>
          <div class="inputs">
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              value={info.email}
              onChange={handlechange}
            />
            <br />
            <div>
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="password"
                value={info.password}
                onChange={handlechange}
              />
              <EyeOutlined />
            </div>
          </div>

          <br />
          <br />

          <div class="remember-me--forget-password">
            <Button type="link">forgot password?</Button>
          </div>

          <br />
          <button className="loginkru" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
