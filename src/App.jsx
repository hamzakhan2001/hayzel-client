import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About Us/About";
import Services from "./components/Services/Services";
import CeoMessage from "./components/CEOMessage/CeoMessage";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import WhyChooseUs from "./components/Why Choose Us/WhyChooseUs";
import FAQ from "./components/FAQ/Faq";
import Login from "./components/Admin/Login";
import Register from "./components/Admin/Register";
import Dashboard from "./components/Admin/Dashboard";
import BlogSection from "./components/Blog/BlogSection";
import BlogEditor from "./components/Admin/BlogEditor";
import BlogsPage from "./components/Blog/BlogsPage";
import BlogPage from "./components/Blog/BlogPage";
import ProtectedRoute from "./components/Admin/ProtectedRoutes";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Services />
              <CeoMessage />
              <WhyChooseUs />
              <FAQ />
              <Contact />
              <BlogSection />
              <Footer />
            </>
          }
        />

        {/* Admin (Protected by backend) */}
        <Route
          path="/admin/login"
          element={
            <ProtectedRoute apiEndpoint="http://localhost:5000/api/admin/check">
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/register"
          element={
            <ProtectedRoute apiEndpoint="http://localhost:5000/api/admin/check">
              <Register />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute apiEndpoint="http://localhost:5000/api/admin/check">
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/blogs/new"
          element={
            <ProtectedRoute apiEndpoint="http://localhost:5000/api/admin/check">
              <BlogEditor />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/blogs/:id/edit"
          element={
            <ProtectedRoute apiEndpoint="http://localhost:5000/api/admin/check">
              <BlogEditor />
            </ProtectedRoute>
          }
        />

        {/* Blog */}
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
      </Routes>
    </Router>
  );
};

export default App;
