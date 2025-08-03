import React, { useEffect, useRef, useState } from 'react';
import { Users, Clock, Star } from 'lucide-react';

interface ClassCard {
  title: string;
  ageGroup: string;
  description: string;
  features: string[];
  color: string;
}

const classData: ClassCard[] = [
  {
    title: "Tiny Feet, Big Moves",
    ageGroup: "3–6 Years",
    description: "Fun-filled dance sessions designed for our youngest dancers to explore movement and rhythm.",
    features: ["Basic movements", "Music appreciation", "Creative expression"],
    color: "from-pink-400 to-red-400"
  },
  {
    title: "Kids Batch",
    ageGroup: "7–12 Years",
    description: "Structured dance training with age-appropriate choreography and technique building.",
    features: ["Hip-hop basics", "Classical foundation", "Performance skills"],
    color: "from-blue-400 to-purple-400"
  },
  {
    title: "Teenagers Batch",
    ageGroup: "13–18 Years",
    description: "Dynamic dance styles focusing on contemporary trends and personal expression.",
    features: ["Modern choreography", "Street dance", "Competition prep"],
    color: "from-green-400 to-teal-400"
  },
  {
    title: "Adult Batch",
    ageGroup: "19+ Years",
    description: "Professional dance training for adults looking to pursue their passion at any age.",
    features: ["Advanced techniques", "Multiple styles", "Flexible timings"],
    color: "from-yellow-400 to-orange-400"
  },
  {
    title: "Groove Fit & Yoga",
    ageGroup: "All Ages",
    description: "Combine fitness with dance and mindfulness through our unique groove and yoga sessions.",
    features: ["Cardio dance", "Flexibility training", "Mind-body connection"],
    color: "from-purple-400 to-pink-400"
  },
  {
    title: "Classical & Contemporary",
    ageGroup: "10+ Years",
    description: "Traditional and modern dance forms taught by experienced classical dance masters.",
    features: ["Bharatanatyam", "Contemporary fusion", "Cultural appreciation"],
    color: "from-indigo-400 to-blue-400"
  }
];

const Classes: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(classData.length).fill(false));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section id="classes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Dance Classes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the perfect dance program for your age and skill level. 
            From tiny tots to adults, we have something special for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classData.map((classItem, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 ${
                visibleCards[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${classItem.color} rounded-t-2xl`}></div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${classItem.color} rounded-lg flex items-center justify-center mr-4`}>
                    <Users className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{classItem.title}</h3>
                    <div className="flex items-center text-gray-600">
                      <Clock size={16} className="mr-1" />
                      <span className="text-sm">{classItem.ageGroup}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{classItem.description}</p>

                <div className="space-y-2">
                  {classItem.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Star size={16} className="text-yellow-400 mr-2" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full mt-6 py-3 bg-gradient-to-r ${classItem.color} text-white font-semibold rounded-lg hover:opacity-90 transform hover:scale-105 transition-all duration-200`}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;