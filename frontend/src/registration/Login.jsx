import { useState } from "react";
import { toast } from "react-toastify";
import httpClient from "../utils/httpclint";
import { REST_URL_OBJ } from "../utils/constant/restUrl";
import { showToast } from "../utils/toast";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    mobile_number: "",
    email: "",
    password: "",
  });

  // Handle tab switching
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await httpClient(
        "post",
        REST_URL_OBJ.AUTH.LOGIN,
        loginData
      );

      if (response?.message === "login successful") {
        showToast("success", "Login Successful!");
      } else {
        showToast("error", "Invalid Credentials! Please try again.");
      }
    } catch (error) {
      if (error.response) {
        showToast(
          "error",
          error.response.data?.message || "Something went wrong!"
        );
      } else if (error.request) {
        showToast(
          "error",
          "No response from the server. Please check your connection."
        );
      } else {
        showToast("error", "An unexpected error occurred. Please try again.");
      }
    }
  };

  // Handle Register form submission
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await httpClient(
        "post",
        REST_URL_OBJ.AUTH.SIGNUP,
        registerData
      );
      if (response.data) {
        toast.success("User Registered Successfully!");
      } else {
        toast.error("Something went wrong. Please try again!");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || "Registration failed!");
      } else {
        toast.error("Network Error. Please try again later.");
      }
    }
  };

  return (
    <div className="container p-3 my-5 d-flex flex-column w-50">
      <ul className="nav nav-pills mb-3 justify-content-between">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "login" ? "active" : ""}`}
            onClick={() => handleTabClick("login")}
          >
            Login
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "register" ? "active" : ""}`}
            onClick={() => handleTabClick("register")}
          >
            Register
          </button>
        </li>
      </ul>

      <div>
        {activeTab === "login" && (
          <div>
            <h4 className="text-center mb-3">Login</h4>
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-3">
                <label htmlFor="loginEmail" className="form-label">
                  Email address
                </label>
                <input
                  autoComplete="off"
                  type="email"
                  className="form-control"
                  id="loginEmail"
                  placeholder="Enter your email"
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="loginPassword" className="form-label">
                  Password
                </label>
                <input
                  autoComplete="off"
                  type="password"
                  className="form-control"
                  id="loginPassword"
                  placeholder="Enter your password"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Sign In
              </button>
            </form>
          </div>
        )}

        {activeTab === "register" && (
          <div>
            <h4 className="text-center mb-3">Register</h4>
            <form onSubmit={handleRegisterSubmit}>
              <div className="mb-3">
                <label htmlFor="registerName" className="form-label">
                  UserName
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  className="form-control"
                  id="UserName"
                  placeholder="Enter your username"
                  value={registerData.username}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      username: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="registerName" className="form-label">
                  FirstName
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  className="form-control"
                  placeholder="Enter your FirstName"
                  value={registerData.first_name}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      first_name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="registerName" className="form-label">
                  LastName
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  value={registerData.last_name}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      last_name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="registerName" className="form-label">
                  Mobile Number
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  className="form-control"
                  placeholder="Enter your Mobile Number"
                  value={registerData.mobile_number}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      mobile_number: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="registerEmail" className="form-label">
                  Email
                </label>
                <input
                  autoComplete="off"
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={registerData.email}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, email: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="registerPassword" className="form-label">
                  Password
                </label>
                <input
                  autoComplete="off"
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={registerData.password}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      password: e.target.value,
                    })
                  }
                />
              </div>
              <button type="submit" className="btn btn-success w-100">
                Sign Up
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
