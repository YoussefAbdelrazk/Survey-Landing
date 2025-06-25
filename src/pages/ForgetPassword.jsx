import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft } from 'lucide-react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Forgot Password?
        </h1>
        <p className="text-gray-600">
          Don't worry, we'll help you reset it.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          />
        </div>

        <Button className="w-full h-12 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-md">
          Reset Password
        </Button>

        <div className="text-center">
          <button className="flex items-center justify-center gap-2 text-gray-600 hover:text-gray-800 mx-auto">
            <ArrowLeft size={16} />
            Back to sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
