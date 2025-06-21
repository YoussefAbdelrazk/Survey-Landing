import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = React.useState(null);

  const faqs = [
    {
      question: "How do I create my first survey?",
      answer: "Simply click on 'Get Started' and choose from our template library or start from scratch. Our intuitive builder will guide you through the process."
    },
    {
      question: "Can I customize the look of my surveys?",
      answer: "Yes! You can customize colors, fonts, logos, and layouts to match your brand. We offer various themes and customization options."
    },
    {
      question: "How many responses can I collect?",
      answer: "This depends on your plan. Our free plan allows up to 100 responses per month, while premium plans offer unlimited responses."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use enterprise-grade security measures, including SSL encryption and secure data centers to protect your information."
    },
    {
      question: "Can I export my survey results?",
      answer: "Yes, you can export your data in various formats including CSV, Excel, and PDF. Real-time analytics are also available in your dashboard."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked <span className="text-blue-600 dark:text-blue-400">Questions</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Find answers to common questions about SurveyLand
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span className="font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
