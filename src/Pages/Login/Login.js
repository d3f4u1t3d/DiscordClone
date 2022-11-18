import React from "react";
import { useState } from "react";
import "./Login.css";
import axios from "axios";
import InputBox from "./../../Components/InputBox/InputBox";
import Button from "./../../Components/Button/Button";
import {
  validateEmail,
  validatePassword,
  validatePhone,
} from "../../Helper/Validate";
import QR from "./../../Assets/Logos/QR1.jpg";
import { Link, Navigate } from "react-router-dom";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
const api = axios.create({
  baseURL: "http://192.168.1.65:7070",
});

function Login() {
  document.title = "Discord";

  api.get("/welcome").then((res) => {
    console.log(res.data.message);
  });

  const [summonError, setSummonError] = useState(0);

  const [formData, setFormData] = useState({ userName: "", password: "" });

  const [navigate, setNavigate] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const valdation = (value) => {
    if (validateEmail(value.userName) || validatePhone(value.userName)) {
      if (validatePassword(value.password)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (!valdation(formData)) {
      alert("Wrong Data");
      return;
    }
    api
      .post("/login", formData)
      // sendForm("user/login",formData)
      .then((res) => {
        console.log(res);
        sessionStorage.setItem("tokenKey", res.data.accessToken);
        setNavigate(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="LoginPage">
        <div className="container">
          <div className="wrapper">
            <div className="textcontainer">
              <h1 className="h1">Welcome back!</h1>
              <p className="Header">We're so excited to see you again!</p>
            </div>
            <form method="POST" onSubmit={handleForm} className="form">
              <InputBox
                onChange={handleChange}
                value={formData.userName}
                name="userName"
                type="text"
                htmlFor="Email"
                Content="EMAIL OR PHONE NUMBER"
                className="SpaceRequired"
              />

              <InputBox
                onChange={handleChange}
                value={formData.password}
                name="password"
                type="password"
                htmlFor="Password"
                Content="PASSWORD"
                className="SpaceNotRequired"
              />
              <p className="forgotpassword">
                <a href="#">Forgot your password?</a>
              </p>

              <Button type="submit " value="Log In" className="ButtonLogin" />
              <p className="Register">
                Need an account? <Link to="/register">Register</Link>
              </p>
            </form>
          </div>
          <div className="horizontal-seperator"></div>
          <div className="qr">
            <div className="qrcontainer">
              <img src={QR} alt="QR" width={164} height={164} />
            </div>
            <div className="textcontainer">
              <h2 className="h2">Log in with QR Code</h2>
              <p className="qrsubtext">
                Scan this with the <strong>Discord mobile app</strong> to log in
                instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
      {navigate && <Navigate to="/" replace={true} />}
    </>
  );
}

export default Login;
