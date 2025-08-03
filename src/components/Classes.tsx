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
    title: "Little Moonwalkers",
    ageGroup: "3–6 Years",
    description: "\"Rock with You\" - Fun sessions for tiny dancers to explore rhythm like the King of Pop.",
    features: ["Basic moonwalk steps", "MJ music appreciation", "Thriller gestures"],
    color: "from-purple-400 to-pink-400"
  },
  {
    title: "Beat It Kids",
    ageGroup: "7–12 Years",
    description: "\"Don't Stop 'Til You Get Enough\" - Structured training with legendary choreography.",
    features: ["Smooth Criminal moves", "Anti-gravity lean", "Jackson 5 classics"],
    color: "from-red-400 to-yellow-400"
  },
  {
    title: "Thriller Teens",
    ageGroup: "13–18 Years",
    description: "\"Billie Jean\" vibes - Master the iconic moves that made history.",
    features: ["Full Thriller routine", "Moonwalk mastery", "Stage presence"],
    color: "from-black to-red-500"
  },
  {
    title: "Smooth Criminal Adults",
    ageGroup: "19+ Years",
    description: "\"Man in the Mirror\" - Transform yourself with professional MJ choreography.",
    features: ["Advanced techniques", "Performance artistry", "Legend's legacy"],
    color: "from-gold to-black"
  },
  {
    title: "Dance Legends Fusion",
    ageGroup: "All Ages",
    description: "\"We Are the World\" - Tribute to all dance legends from MJ to Martha Graham.",
    features: ["Multi-legend styles", "Historical choreography", "Cultural fusion"],
    color: "from-rainbow to-gold"
  },
  {
    title: "King of Pop Classics",
    ageGroup: "10+ Years",
    description: "\"Remember the Time\" - Master the timeless moves of the greatest entertainer.",
    features: ["Iconic music videos", "Signature spins", "Legendary performances"],
    color: "from-silver to-gold"
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
            🕺 Legendary Dance Programs 🕺
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            "It don't matter if you're black or white" - Everyone can learn from the legends! 
            Master the moves that changed the world forever.
          </p>
          <div className="mt-4 text-lg text-gray-700 font-semibold">
            ✨ Inspired by Michael Jackson & Dance Legends ✨
          </div>
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