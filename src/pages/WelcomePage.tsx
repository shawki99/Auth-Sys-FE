import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/SignupPage.css";
import logo from "../assets/EasyGenerator_logo.png";

const WelcomePage = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
      return;
    }

    axios
      .get("http://localhost:3000/auth/welcome", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch(() => {
        setMessage("Access denied or invalid token");
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <div className="signup-page-wrapper">
      <div className="signup-container">
        <div className="signup-box">
          <div className="signup-left">
            <img src={logo} alt="Easy Generator Logo" />
          </div>
          <div className="signup-right">
            <h2>{message || "Loading..."}</h2>
            <button onClick={handleLogout} style={{ marginTop: "2rem" }}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
