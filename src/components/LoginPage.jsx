// components/LoginPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

const LoginPage = ({ onGoogleSignIn }) => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await onGoogleSignIn();
      navigate("/components");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center">Login</h1>
        <Alert variant="info" className="mb-4">
          Please sign in with Google to access the components.
        </Alert>
        <button onClick={handleLogin} className="w-full btn btn-primary">
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
