import React from 'react';
import { Button } from '../components/ui/button';

const Home = () => {
  return (
    <div className="bg-white dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Turn <span className="text-[#36bbc3] dark:text-[#36bbc3]">Questions</span> into Clarity
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-200">
              and Transform <span className="text-[#36bbc3] dark:text-[#36bbc3]">Responses</span> into Valuable Insights
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
              Whether you want to gauge customer satisfaction, understand employee engagement, or dive into market research, our intuitive platform empowers you to create, distribute, and analyze surveys with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#36bbc3] hover:bg-[#2ea9aa] text-white px-8 py-3">
                Start Survey
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 border-[#36bbc3] text-[#36bbc3] hover:bg-[#e0f7f8] dark:border-[#36bbc3] dark:text-[#36bbc3]">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <img 
              src="src/assets/6658658.png" 
              alt="Survey Analytics Dashboard" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;