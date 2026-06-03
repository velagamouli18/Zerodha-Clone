import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/signup`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href =
            process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div
            className="card shadow p-4"
            style={{ width: "100%", maxWidth: "420px", borderRadius: "15px" }}
        >
            <h2 className="text-center mb-4">Create Account</h2>

            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                Email
                </label>

                <input
                type="email"
                name="email"
                value={email}
                className="form-control"
                placeholder="Enter your email"
                onChange={handleOnChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="username" className="form-label">
                Username
                </label>

                <input
                type="text"
                name="username"
                value={username}
                className="form-control"
                placeholder="Enter your username"
                onChange={handleOnChange}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="password" className="form-label">
                Password
                </label>

                <input
                type="password"
                name="password"
                value={password}
                className="form-control"
                placeholder="Enter your password"
                onChange={handleOnChange}
                />
            </div>

            <button type="submit" className="btn btn-primary w-100">
                Sign Up
            </button>

            <p className="text-center mt-3 mb-0">
                Already have an account?{" "}
                <Link to="/login" className="text-decoration-none">
                Login
                </Link>
            </p>
            </form>

            <ToastContainer />
        </div>
        </div>
  );
};

export default Signup;