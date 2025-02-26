import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [profilePic, setProfilePic] = useState(null);

  const handleFileChange = (e) => {
    setProfilePic(e.target.files[0]); // Fixed file selection
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (!name || !email || !password  || !profilePic) {
      alert("Please fill in all fields and upload a profile picture.");
      return;
    }

   

    // Create a FormData object to send the image file
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("profilePic", profilePic);

    try {
      const response = await axios.post("http://localhost:5000/api/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("User created:", response.data);
      alert("Account created successfully!");

      // Reset fields
      setName("");
      setEmail("");
      setPassword("");
      
      setProfilePic(null);
    } catch (error) {
      console.error("Error during signup:", error.response?.data || error.message);
      alert("Signup failed!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Create Account</h1>
        <form onSubmit={handleSubmit} >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
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
              name="password"
              className="border rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
         
          
          <div className="mb-4">
            <label htmlFor="profilePic" className="block text-gray-700 font-bold mb-2">
              Profile Picture
            </label>
            <input
              type="file"
              id="profilePic"
              name="profilePic"
              accept=".png, .jpg , .jpeg"
              className="border rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={handleFileChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Sign Up
          </button>
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
