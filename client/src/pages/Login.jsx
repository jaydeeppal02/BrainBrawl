import { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const notify = () => toast("Wow so easy!");
  <div>
    <button onClick={notify}>Notify!</button>
    <ToastContainer />
  </div>;
  const navigate = useNavigate();

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post(
        "http://localhost:3000/quiz/login",
        formData,
      );
      
      setformData({
        email: "",
        password: "",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-[#f4f6f3] px-2">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          {/* Logo / Brand */}
          <div className="text-center mb-8">
            <p className="text-gray-500 mt-2">
              Login to continue your quiz journey
            </p>
          </div>

          {/* Form */}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>

              <input
                onChange={handleChange}
                value={formData.email}
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-[#667761] transition"
              />
            </div>

            {/* Password */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <input
                onChange={handleChange}
                value={formData.password}
                type="password"
                placeholder="Enter your password"
                name="password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-[#667761] transition"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <button className="text-sm text-[#667761] hover:underline">
                Forgot Password?
              </button>
            </div>

            {/* Login */}
            <button className="w-full py-3 bg-[#667761] text-white rounded-lg font-semibold hover:opacity-90 transition">
              Login
            </button>
          </form>

          {/* Register */}
          <div className="text-center mt-7">
            <p className="text-sm text-gray-500">Don't have an account?</p>

            <button
              className="mt-2 text-[#667761] font-semibold hover:underline"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
