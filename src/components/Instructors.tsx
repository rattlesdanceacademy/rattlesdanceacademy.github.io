import React, { useEffect, useRef, useState } from 'react';
import { Award, Clock, Star, Users } from 'lucide-react';

interface Instructor {
  name: string;
  title: string;
  experience: string;
  teachingExperience: string;
  description: string;
  specialties: string[];
  color: string;
}

const instructorsData: Instructor[] = [
  {
    name: "Yuvaraj Madhan",
    title: "🎭 Master of Moonwalk & Lead Choreographer",
    experience: "20 years of performing",
    teachingExperience: "5 years of teaching",
    description: "\"The King of Pop's disciple\" - Master choreographer who brings MJ's legendary moves to life with two decades of excellence.",
    specialties: ["Michael Jackson Choreography", "Moonwalk Mastery", "Thriller Routines", "Smooth Criminal"],
    color: "from-red-500 to-purple-600"
  },
  {
    name: "Kevin",
    title: "🌟 Rising Star & Dance Legend Apprentice",
    experience: "10 years of practicing",
    teachingExperience: "Teaching Intern",
    description: "\"Beat It\" enthusiast with a decade of dedication, channeling the spirit of dance legends into every lesson.",
    specialties: ["Beat It Choreography", "Anti-Gravity Lean", "Youth MJ Programs", "Billie Jean Steps"],
    color: "from-red-500 to-purple-600"
  }
];

const Instructors: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(instructorsData.length).fill(false));
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            🎤 Meet Our Legend Masters 🎤
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            "Who's Bad?" - Our instructors! Learn from passionate professionals who've mastered 
            the legendary moves and will help you "Beat It" on the dance floor.
          </p>
          <div className="mt-4 text-lg font-semibold text-gray-700">
            🕺 "Just Beat It, Beat It" - Master the Moves! 🕺
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {instructorsData.map((instructor, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transform transition-all duration-700 hover:scale-105 ${
                visibleCards[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`h-3 bg-gradient-to-r ${instructor.color} rounded-t-3xl`}></div>
              
              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${instructor.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <Award className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{instructor.name}</h3>
                  <p className="text-lg font-semibold text-gray-600 mb-1">{instructor.title}</p>
                </div>

                {/* Experience Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Clock className="text-gray-600 mr-2" size={20} />
                    </div>
                    <p className="text-sm font-semibold text-gray-800">{instructor.experience}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="text-gray-600 mr-2" size={20} />
                    </div>
                    <p className="text-sm font-semibold text-gray-800">{instructor.teachingExperience}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">{instructor.description}</p>

                {/* Specialties */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {instructor.specialties.map((specialty, specialtyIndex) => (
                      <span
                        key={specialtyIndex}
                        className={`px-3 py-1 bg-gradient-to-r ${instructor.color} text-white text-sm font-medium rounded-full shadow-sm`}
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Rating Display */}
                <div className="flex items-center justify-center pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                    <span className="ml-2 text-gray-600 font-medium">Expert Level</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Learn from the Best?
            </h3>
            <p className="text-gray-600 mb-6">
              Join our classes and experience personalized instruction from our expert team.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-semibold py-3 px-8 rounded-full hover:opacity-90 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Book Your First Class
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;