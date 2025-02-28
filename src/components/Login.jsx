import React from "react";
import { Lock, User } from "lucide-react";
import "./Login.css"; // Make sure you have your styles

// Card Component
const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
};

// CardContent Component
const CardContent = ({ children, className = "" }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

// Button Component
const Button = ({ children, className = "", onClick }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-500 text-white rounded-md ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Input Component
const Input = ({ type = "text", placeholder, className = "" }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`px-4 py-2 border border-gray-300 rounded-md ${className}`}
    />
  );
};

// LoginPage Component
const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-blue-800">
      {/* Card component with custom width and padding */}
      <Card className="w-96 p-6 shadow-lg bg-white rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-blue-800">AR Navigation Login</h2>

        {/* CardContent component to hold the form elements */}
        <CardContent className="mt-4">
          {/* Username Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-500" size={20} />
              <Input type="text" placeholder="Enter your username" className="pl-10" />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-500" size={20} />
              <Input type="password" placeholder="Enter your password" className="pl-10" />
            </div>
          </div>

          {/* Login Button */}
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg mt-2">
            Login
          </Button>

          {/* Register Link */}
          <p className="text-center text-gray-600 text-sm mt-3">
            New user?{" "}
            <a href="#" className="text-blue-700">
              Register here
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
