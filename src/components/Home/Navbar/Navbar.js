import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({
  brandName = "JobHunt",
  navLinks = [],
  onLogin = () => {},
  onRegister = () => {}
}) {
  return (
    <nav className="navbar navbar-expand-lg glass-navbar navbar-dark">
      <div className="container-fluid">
        {/* Left: Logo */}
        <Link className="navbar-brand text-white" to="/">{brandName}</Link>

        {/* Navbar toggler (for mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Center: Nav Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            {navLinks.map((link, index) => (
              <li className="nav-item" key={index}>
                <Link className="nav-link text-white" to={link.path}>{link.label}</Link>
              </li>
            ))}
            {/* Mobile-only Auth Buttons */}
            <li className="nav-item d-lg-none">
              <button
                className="btn text-white w-100 text-start ps-3 border border-white"
                onClick={onLogin}
              >
                Login
              </button>
            </li>
            <li className="nav-item d-lg-none">
              <button
                className="btn text-white btn-lightt w-100 text-start ps-3"
                onClick={onRegister}
              >
                Register
              </button>
            </li>
          </ul>
        </div>

        {/* Right: Login/Register */}
        <div className="d-flex desktop-auth-buttons">
          <button
            className="btn text-white btn-lg me-2"
            onClick={onLogin}
          >
            Login
          </button>
          <button
            className="btn text-white btn-lightt"
            onClick={onRegister}
          >
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}
