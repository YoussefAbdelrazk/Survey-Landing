import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { GraduationCap, MessageSquare } from 'lucide-react';

const TemplateGrid = () => {
  const templates = [
    {
      id: 1,
      title: "Course Evaluation Survey",
      description: "Collect feedback on course content, teaching methods, and overall learning experience",
      category: "Education & Training",
      image: "src/assets/starts.png"
    },
    {
      id: 2,
      title: "Learning Outcomes Survey",
      description: "Evaluate how well students have achieved learning objectives and skills",
      category: "Education & Training",
      image: "src/assets/iamge.png"
    },
    {
      id: 3,
      title: "Student Satisfaction Survey",
      description: "Measure student satisfaction with educational services and facilities",
      category: "Education & Training",
      image: "src/assets/1.png"
    },
    {
      id: 4,
      title: "Instructor Feedback Survey",
      description: "Evaluate teaching effectiveness and instructor performance from student perspective",
      category: "Education & Training",
      image: "src/assets/starts.png"
    },
    {
      id: 5,
      title: "Post-Event Satisfaction Survey",
      description: "Gather feedback on event organization, content, and overall attendee experience",
      category: "Event Feedback",
      image: "src/assets/iamge.png"
    },
    {
      id: 6,
      title: "Speaker Feedback Survey",
      description: "Evaluate speaker performance, presentation quality, and audience engagement",
      category: "Event Feedback",
      image: "src/assets/starts.png"
    },
    {
      id: 7,
      title: "Venue Feedback Survey",
      description: "Assess venue facilities, accessibility, and suitability for events",
      category: "Event Feedback",
      image: "src/assets/1.png"
    },
    {
      id: 8,
      title: "Virtual Event Survey",
      description: "Collect feedback on virtual event platform, content delivery, and technical aspects",
      category: "Event Feedback",
      image: "src/assets/iamge.png"
    }
  ];

  const categories = ["Education & Training", "Event Feedback"];

  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-left mb-20">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Popular <span className="text-blue-600 dark:text-blue-400" style={{ color: "#35bbc3"}}>Templates</span>
          </h2>
        </div>
        

        {/* Template Categories */}
        {categories.map((category) => (
          <div key={category} className="mb-20">
            <div className="flex justify-between items-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                {category} 
              </h3>
              <Button
                variant="outline"
                className="text-blue-600 border-blue-600 hover:bg-[#36bbc3] dark:hover:bg-[#36bbc3] px-6 py-2"
              >
                View All →
              </Button>
            </div>

            {/* Cards Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {templates
    .filter(template => template.category === category)
    .slice(0, 4)
    .map((template) => (
      <Card 
        key={template.id} 
        className="group bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 overflow-hidden"
      >
        {/* Image at the top */}
        <div className="w-full h-40 overflow-hidden">
          <img 
            src={template.image} 
            alt={template.title} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 flex flex-col justify-between h-full">

          {/* Title */}
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-bg-[#36bbc3] dark:group-hover:text-blue-400 transition-colors duration-300">
            {template.title}
          </h4>
<br/>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
            {template.description}
          </p>
          <br/>

          {/* Button */}

        

              <Button size="lg" className="bg-[#36bbc3] hover:bg-[#36bbc3] text-white px-8 py-3">
            Use Template
              </Button>



          <Button 
            className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 w-full shadow-md hover:shadow-lg transition-all duration-300"
          >
          </Button>
        </div>
      </Card>
  ))}
</div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default TemplateGrid;
