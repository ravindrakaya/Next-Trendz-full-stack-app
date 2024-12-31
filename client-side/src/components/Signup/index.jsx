import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errObj, setErrObj] = useState({});

  const navigate = useNavigate();

  const renderUsername = () => {
    return (
      <div className="label-input-container">
        <label htmlFor="username" className="label-el">
          USERNAME
        </label>
        <input
          type="text"
          className="label-input"
          id="username"
          placeholder="Enter Username"
          onChange={(event) => setUsername(event.target.value)}
          value={username}
        />
        {errObj.username && (
          <span className="error-msg">{errObj.username}</span>
        )}
      </div>
    );
  };

  const renderPassword = () => {
    return (
      <div className="label-input-container">
        <label htmlFor="password" className="label-el">
          PASSWORD
        </label>
        <input
          type="password"
          className="label-input"
          id="password"
          placeholder="Enter Password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
        {errObj.password && (
          <span className="error-msg">{errObj.password}</span>
        )}
      </div>
    );
  };

  const validateForm = () => {
    let newObj = {};
    let isValid = true;

    // Validate username
    if (!username.trim()) {
      newObj.username = "Username is Required*";
      isValid = false;
    }

    // Validating Password
    if (!password.trim()) {
      newObj.password = "Password is Required*";
      isValid = false;
    }

    setErrObj(newObj);

    return isValid;
  };

  const onSubmitSignForm = async (event) => {
    event.preventDefault();
    setUsername("");
    setPassword("");

    if (validateForm()) {
      const values = { username, password };

      try {
        const response = await axios.post(
          "http://localhost:3000/signup",
          values
        );
        // console.log(response);
        if (response.status === 200) {
          navigate("/login");
          alert(response.data.message);
        } else {
          alert(response.data.message);
        }
      } catch (err) {
        console.log(err.message);
        alert(err.message);
      }
    }
  };

  return (
    <>
      <div className="authentication-container">
        <img
          src="nxt-trendz-login-img.png"
          className="login-img-desktop-view"
        />
        <form className="authentication-form" onSubmit={onSubmitSignForm}>
          <img src="nxt-trendz-logo-img.png" className="logo-img" />
          <img
            src="nxt-trendz-login-img.png"
            className="login-img-mobile-view"
          />
          {renderUsername()}
          {renderPassword()}
          <button type="submit" className="form-btn">
            Signup
          </button>
          <span className="span-btn-el">
            Have an Account ?
            <button
              type="button"
              className="span-btn"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </span>
        </form>
      </div>
    </>
  );
};

export default Signup;
