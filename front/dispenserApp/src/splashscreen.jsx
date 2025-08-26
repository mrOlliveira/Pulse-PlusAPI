// src/SplashScreen.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./splash.css";

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <h1 className="splash-title">
        PULSE<span className="highlight">+</span>
      </h1>
      <img 
        src="/assets/pulse-logo.svg" 
        alt="Pulse Logo"
        className="splash-logo"
      />
    </div>
  );
}
