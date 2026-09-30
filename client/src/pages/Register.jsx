import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  try {
    await axios.post("https://brainbrawl-cadn.onrender.com/quiz/register",formData)
   
    setFormData({
        name: "",
        email: "",
        password: "",
    })
    navigate("/")
  } catch (error) {
    console.log(error.response?.data || error.message)
  }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-[#f4f6f3] px-2 py-10">

        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#667761]">
              Create Account
            </h1>

            <p className="text-gray-500 mt-2">
              Join BrainBrawl and start your quiz journey
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name" required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-[#667761] transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email" required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-[#667761] transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password" required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-[#667761] transition"
              />
            </div>

            {/* Confirm Password */}
           

            {/* Register Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#667761] text-white rounded-lg font-semibold hover:opacity-90 transition"
            >
              Register
            </button>

            {/* Login */}
            <div className="text-center mt-7">
              <p className="text-sm text-gray-500">
                Already have an account?
              </p>

              <button
                type="button"
                onClick={() => navigate("/login")}
                className="mt-2 text-[#667761] font-semibold hover:underline"
              >
                Login
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
};

export default Register;