import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToClasses = () => {
    const element = document.getElementById('classes');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToRegistration = () => {
    const element = document.getElementById('registration');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-purple-600 via-red-500 to-black"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.3%22%3E%3Cpath%20d%3D%22M30%2015l7.5%2015L30%2045l-7.5-15z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Dance Legends Quotes */}
      <div className="absolute top-20 left-10 text-white/30 text-sm font-italic hidden lg:block">
        "The way you make me feel..." - MJ
      </div>
      <div className="absolute bottom-20 right-10 text-white/30 text-sm font-italic hidden lg:block">
        "Dance is the hidden language of the soul" - Martha Graham
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fadeInUp">
          <div className="mb-6">
            <span className="text-lg text-yellow-300 font-semibold">✨ Inspired by Dance Legends ✨</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            MOONWALK YOUR DREAMS
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-8">
            THRILLER MOVES ACADEMY
          </h2>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 mb-10 border border-yellow-400/30">
            <p className="text-lg sm:text-xl text-white font-medium">
              🕺 "Just Beat It" - Join the Legend's Legacy - Starting 23 FEB 2025
            </p>
            <p className="text-sm text-yellow-300 mt-2">
              "It don't matter if you're black or white" - Everyone can dance!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToClasses}
              className="bg-gradient-to-r from-yellow-400 to-red-500 text-black font-semibold py-4 px-8 rounded-full hover:from-yellow-300 hover:to-red-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              🎭 Learn the Moves
            </button>
            <button
              onClick={scrollToRegistration}
              className="bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold py-4 px-8 rounded-full hover:bg-yellow-400 hover:text-black transform hover:scale-105 transition-all duration-300"
            >
              🌟 Register Now
            </button>
          </div>

          <div className="mt-8 text-yellow-300 text-sm">
            <p>"The way you make me feel, it's really unreal" 🎵</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-center">
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center mb-2">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-yellow-300 text-xs">Smooth Criminal Scroll ⬇️</p>
      </div>
    </section>
  );
};

export default Hero;