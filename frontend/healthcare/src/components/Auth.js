import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCaretDown } from "react-icons/fa";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [, setUser] = useState(null); // Mock setUser from Header

    const handleAuth = (e) => {
      e.preventDefault();
      if (isLogin) {
        // Login logic
        if (email === "user@example.com" && password === "password") {
          // Mock successful login
          const mockUser = { email: email };
          localStorage.setItem('mockUser', JSON.stringify(mockUser)); // Store mock user
          setUser(mockUser); // Update mock user state in Header
          navigate("/");
        } else {
          setError("Invalid email or password");
        }
      } else {
        // Sign up logic
        if (email && password && name && phone && address) {
          console.log("User signed up with:", {
            email,
            password,
            name,
            phone,
            address,
          });
          // Mock successful signup
          const mockUser = { email: email, name: name };
          localStorage.setItem('mockUser', JSON.stringify(mockUser)); // Store mock user
          setUser(mockUser); // Update mock user state in Header
          navigate("/");
        } else {
          setError("Please fill in all fields");
        }
      }
    };
    return (
      <motion.section
        className="container authContainer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div style={{ marginTop: '20px' }} />
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card authCard">
              <h1 className="mb-3">{isLogin ? "Login" : "Sign Up"}</h1>
              <form onSubmit={handleAuth}>
                {!isLogin && (
                  <>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name:
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        Phone Number:
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="form-control"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="address" className="form-label">
                        Address:
                      </label>
                      <input
                        type="text"
                        id="address"
                        className="form-control"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                    </div>
                  </>
                )}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary">
                    {isLogin ? "Login" : "Sign Up"}
                  </button>
                </div>
              </form>
              <button
                type="button"
                className="btn btn-link mt-3"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot Password?
              </button>
              <button
                className="btn btn-secondary mt-3"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Need an account? Sign Up" : "Already have an account? Login"}
              </button>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: '20px' }} />
      </motion.section>
    );
  };
  export default Auth;