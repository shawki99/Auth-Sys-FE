import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/SignupPage.css";
import logo from "../assets/EasyGenerator_logo.png";

const SigninPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post("http://localhost:3000/auth/signin", form);
      localStorage.setItem("token", res.data.access_token);
      navigate("/welcome");
    } catch (err: any) {
      setError(err?.response?.data?.message || "Signin failed");
    }
  };

  return (
    <div className="signup-page-wrapper">
      <div className="signup-container">
        <div className="signup-box">
          <div className="signup-left">
            <img src={logo} alt="Easy Generator Logo" />
          </div>
          <div className="signup-right">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <button type="submit">Login</button>
            </form>
            {error && <p style={{ color: "red", marginTop: 10 }}>{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
