import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
  name: string;
  text: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: "Priya R",
    text: "Amazing dance academy! My daughter loves every class.",
    rating: 5
  },
  {
    name: "Suresh M",
    text: "Best place to learn dance in Chennai!",
    rating: 5
  },
  {
    name: "Anjali K",
    text: "Fun, energetic, and a great community.",
    rating: 5
  },
  {
    name: "Vikram S",
    text: "Professional instructors and excellent facilities.",
    rating: 5
  },
  {
    name: "Meera L",
    text: "My son's confidence has grown tremendously here.",
    rating: 5
  }
];

const MediaReviews: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Gallery & Reviews
          </h2>
          <p className="text-xl text-gray-600">
            See our students in action and hear what our community says
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Google Photos Section */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Live Photo Gallery
            </h3>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-full h-64 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📸</span>
                  </div>
                  <p className="text-gray-600 mb-4">View our latest photos and videos</p>
                  <a
                    href="https://photos.google.com/share/AF1QipMHKfuMezRHgUp-eYOAy_-GADiyP1BDzJZljquNo2Kf1-Hgj14aZkzQeb4BrlKjHg?key=IdfOidoAWQmlOm9u2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-400 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transform hover:scale-105 transition-all duration-200"
                  >
                    Open Gallery
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="bg-gray-800 rounded-2xl p-8 text-white relative overflow-hidden">
            <h3 className="text-2xl font-bold mb-8 text-center">
              What Our Students Say
            </h3>
            
            <div className="relative h-48 flex items-center justify-center">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(reviews[currentReview].rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={24} />
                  ))}
                </div>
                
                <blockquote className="text-lg mb-4 italic">
                  "{reviews[currentReview].text}"
                </blockquote>
                
                <p className="font-semibold text-yellow-400">
                  — {reviews[currentReview].name}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={prevReview}
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextReview}
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-4">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentReview ? 'bg-yellow-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaReviews;