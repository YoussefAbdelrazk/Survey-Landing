import React from "react";
import { FileText, Users, BarChart3 } from "lucide-react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const About = () => {
  const steps = [
    {
      icon: FileText,
      title: "Create Your Survey",
      description:
        "Choose a template or start from scratch to build your survey with our intuitive drag-and-drop builder",
    },
    {
      icon: Users,
      title: "Share With Your Audience",
      description:
        "Send your survey via email, social media, or embed it on your website to reach your target audience",
    },
    {
      icon: BarChart3,
      title: "Analyze Responses",
      description:
        "Get instant insights with real-time charts, visualizations and detailed analytics reports and visualizations",
    },
  ];

  return (
    <section className="py-24 bg-gray-100 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            How It{" "}
            <span style={{ color: "#35bbc3" }}>Works</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get started with our simple three-step process and transform your
            data collection experience
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="w-full shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <CardBody className="p-6">
                <step.icon
                  className="mb-4 h-12 w-12"
                  style={{ color: "#35bbc3" }}
                />
                <Typography
                  variant="h6"
                  className="mb-2 text-gray-900 dark:text-white"
                >
                  {step.title}
                </Typography>
                <Typography className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0"></CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
