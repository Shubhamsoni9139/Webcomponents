// First, install these dependencies:
// npm install react-router-dom firebase @/components/ui/button @/components/ui/alert

// App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import ComponentsPage from "./components/ComponentsPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import LoginPage from "./components/LoginPage.jsx";
import AdminPage from "./components/AdminPage";
import { auth, provider } from "./components/firebase";
import HeroHome from "./hero-section/hero";
import Price from "./price/price";
import Test from "./test";
import Grids from "./bento-grids/grids";

// Protected Route Component
const ProtectedRoute = ({ children, requiredRole = "user" }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  // Check if user has required role (implement your role check logic here)
  const userRole = user.email === "ss4185667@gmail.com" ? "admin" : "user";
  if (requiredRole === "admin" && userRole !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
};

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <BrowserRouter>
      <Navigation user={user} onSignOut={handleSignOut} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/pricing-sections" element={<Price />} />
        <Route path="/bento-grids" element={<Grids />} />
        <Route path="/hero-sections" element={<HeroHome />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/login"
          element={<LoginPage onGoogleSignIn={handleGoogleSignIn} />}
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<Navigate to="/components" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
