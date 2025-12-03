import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../../service/adminApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await loginAdmin({ email, password });

    // Save the token properly
    localStorage.setItem("token", res.data.token);

    alert("Login successful!");
    window.location.href = "/admin/dashboard";
  } catch (err) {
    console.error(err);
    alert(err.response?.data?.message || "Login failed");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

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
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>

        <p
          className="text-sm text-center mt-4 text-blue-500 cursor-pointer"
          onClick={() => navigate("/admin/register")}
        >
          Don’t have an account? Register
        </p>
      </form>
    </div>
  );
};

export default Login;
