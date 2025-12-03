import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerAdmin } from "../../service/adminApi";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerAdmin({ name, email, password });
      setMessage("Registration successful! Redirecting to login...");
      setTimeout(() => navigate("/admin/login"), 1500);
    } catch (err) {
      setMessage(err.response?.data?.message || "Registration failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Admin Register</h2>

        {message && <p className="text-center mb-4 text-blue-600">{message}</p>}

        <input
          type="text"
          placeholder="Name"
          className="border w-full p-2 mb-4 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="border w-full p-2 mb-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700 transition"
        >
          Register
        </button>

        <p
          className="text-sm text-center mt-4 text-blue-500 cursor-pointer"
          onClick={() => navigate("/admin/login")}
        >
          Already have an account? Login
        </p>
      </form>
    </div>
  );
};

export default Register;
