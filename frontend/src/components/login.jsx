import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();//prevent refresh
 await axios.post(`http://localhost:5000/api/login`,{email,password})
 .then(res=>{
console.log(res.data)
navigate("/")
 }).catch(e=>{
  console.log(e)
 })
  
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Center the form */}
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        {/* Card-like container */}
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          {/* Add onSubmit handler */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Login
          </button>
          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
