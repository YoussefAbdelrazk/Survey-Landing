import React from "react";
import { FileText, Users, BarChart3 } from "lucide-react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

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

function AboutWorks() {
  return (
    <section className="py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-text dark:text-primary-text mb-6">
            How It <span className="text-primary-btn dark:text-primary-btn">Works</span>
          </h2>
          <p className="text-sm md:text-base lg:text-xl  max-w-3xl mx-auto  md:max-w-[70%] text-secondary-text dark:text-secondary-text">
            Get started with our simple three-step process and transform your
            data collection experience
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="w-full shadow-lg rounded-lg hover:shadow-lg transition-shadow duration-300 h-full bg-white dark:bg-black"
            >
              <CardBody className="p-6">
                <step.icon
                  className="mb-4 h-12 w-12 text-primary-btn dark:text-primary-btn"
                />
                <Typography
                  variant="h6"
                  className="mb-2 text-primary-text dark:text-primary-text font-semibold"
                >
                  {step.title}
                </Typography>
                <Typography className="text-secondary-text dark:text-secondary-text">
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
}

export default AboutWorks;
