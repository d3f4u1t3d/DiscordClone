import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import InputBox from "../../Components/InputBox/InputBox";
import Button from "../../Components/Button/Button";
import SelectDropDown from "../../Components/SelectDropDown/SelectDropDown";
import { date } from "./../../Assets/MockData/mockdata";
import { Navigate } from "react-router-dom";
import {
  validateEmail,
  validatePassword,
  validateDOB,
} from "../../Helper/Validate";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [dateSelected, dateSetSelected] = useState("");
  const [monthSelected, monthSetSelected] = useState("");
  const [yearSelected, yearSetSelected] = useState("");

  const [navigate, setNavigate] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const valdation = (value) => {
    if (validateEmail(value.email)) {
      if (validatePassword(value.password)) {
        if (validateDOB(dateSelected, monthSelected, yearSelected)) {
          return true;
        } else {
          return false;
        }
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
    let fromData = new FormData();
    fromData.append("email", formData.email);
    fromData.append("username", formData.username);
    fromData.append("password", formData.password);

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let month = months.indexOf(monthSelected) + 1;

    fromData.append("DOB", `${dateSelected}-${month}-${yearSelected}`);
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios
      .post(`http://192.168.1.46:7070/signup`, fromData)
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
      <div className="RegisterPage">
        <div className="container1">
          <div className="wrapper1">
            <div className="textcontainer1">
              <h1 className="h11">Create an account</h1>
            </div>
            <form className="form1">
              <InputBox
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="text"
                htmlFor="Email"
                Content="EMAIL"
                className="SpaceRequired"
              />

              <InputBox
                name="username"
                value={formData.username}
                onChange={handleChange}
                type="text"
                htmlFor="Username"
                Content="USERNAME"
                className="SpaceRequired"
              />

              <InputBox
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                htmlFor="Password"
                Content="PASSWORD"
                className="SpaceRequired"
              />
              <label className="label1">DATE OF BIRTH</label>

              <div className="DOBContainer">
                <SelectDropDown
                  selected={dateSelected}
                  setSelected={dateSetSelected}
                  option={date.day}
                  defaut="Date"
                />
                <SelectDropDown
                  selected={monthSelected}
                  setSelected={monthSetSelected}
                  option={date.month}
                  defaut="Month"
                />
                <SelectDropDown
                  selected={yearSelected}
                  setSelected={yearSetSelected}
                  option={date.year}
                  defaut="Year"
                />
              </div>

              {/* <InputBox type="checkbox" htmlFor="emailConfirmation" Content="(Optional) It’s okay to send me emails with Discord updates, tips and special offers. You can opt out at any time." className=".checkbox1" checked/> */}
              {/* <div style={{display:"flex",flexDirection:"row",justifyContent:'space-between'}}>
          <input className='checkbox1' type="checkbox"/>
          <label className='label2'>(Optional) It’s okay to send me emails with Discord updates, tips and special offers. You can opt out at any time.</label>
          </div> */}

              <label className="container2">
                (Optional) It’s okay to send me emails with Discord updates,
                tips and special offers. You can opt out at any time.
                <input type="checkbox" />
                <span className="checkmark2"></span>
              </label>

              <Button
                onClick={handleForm}
                type="submit "
                value="Continue"
                className="ButtonLogin"
              />
              <p className="login">
                <Link to="/login">Already have an account?</Link>
              </p>

              <p className="disclaimer">
                By registering you agree to Discord's
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
              </p>
            </form>
          </div>
        </div>
      </div>
      {navigate && <Navigate to="/" replace={true} />}
    </>
  );
}

export default Register;
