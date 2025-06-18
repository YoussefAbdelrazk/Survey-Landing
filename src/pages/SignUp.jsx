import React from "react";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, EyeOff, Facebook, Mail } from "lucide-react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Welcome Section */}
      <div className="flex-1 bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center p-8">
        <div className="text-center text-white max-w-md">
          <h1 className="text-4xl font-bold mb-6">
            Already have<br />
            an account?
          </h1>
          <p className="text-lg mb-8 opacity-90">
            Sign in to see right away!
          </p>
          <Button 
            variant="outline" 
            className="bg-transparent border-white text-white hover:bg-white hover:text-teal-500 px-8 py-2 rounded-full transition-all duration-300"
          >
            SIGN IN
          </Button>
        </div>
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <Card className="w-full max-w-md shadow-lg border-0">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-teal-500 mb-2">Create Account</h2>
              <div className="flex justify-center space-x-4 mb-6">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-gray-300 hover:bg-blue-50"
                >
                  <Facebook className="w-5 h-5 text-blue-600" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-gray-300 hover:bg-red-50"
                >
                  <Mail className="w-5 h-5 text-red-600" />
                </Button>
              </div>
              <p className="text-sm text-gray-600">or use your email for registration</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="firstName" className="text-gray-700">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="mt-1 border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                  required
                />
              </div>

              <div>
                <Label htmlFor="lastName" className="text-gray-700">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="mt-1 border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-700">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-gray-700">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    className="mt-1 border-gray-300 focus:border-teal-500 focus:ring-teal-500 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-400 to-teal-500 hover:from-cyan-500 hover:to-teal-600 text-white py-2 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                SIGN UP
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUp