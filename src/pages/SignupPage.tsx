import { useState } from "react";
import "../style/SignupPage.css";
import logo from "../assets/EasyGenerator_logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const { email, name, password } = form;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    if (name.trim().length < 3) {
      setError("Name must be at least 3 characters.");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be 8+ chars with a letter, number & special char."
      );
      return;
    }

    try {
      await axios.post("http://localhost:3000/auth/signup", form);
      navigate("/signin");
    } catch (err: any) {
      setError(err?.response?.data?.message || "Signup failed");
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
            <h2>Sign Up</h2>
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
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
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
              <button type="submit">Create Account</button>
            </form>
            {error && <p style={{ color: "red", marginTop: 10 }}>{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
