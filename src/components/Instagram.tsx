import React from 'react';
import { Instagram as InstagramIcon, ExternalLink } from 'lucide-react';

const Instagram: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <InstagramIcon className="text-white" size={40} />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Follow Our Journey
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Stay updated with our latest performances, behind-the-scenes moments, and dance inspiration
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
              <InstagramIcon className="text-white" size={32} />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-800">@rattles_dance_academy</h3>
              <p className="text-gray-600">Follow us for daily dance inspiration</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
           <div className="aspect-square bg-black rounded-lg flex items-center justify-center overflow-hidden">
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      title="Dance Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full"
    ></iframe>
  </div>
  {/* Other grid items */}
  {[2, 3, 4, 5, 6].map((i) => (
    <div
      key={i}
      className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-200"
    >
      <span className="text-4xl"></span>
    </div>
  ))}
          </div>

          <a
            href="https://www.instagram.com/rattles_dance_academy/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-full hover:opacity-90 transform hover:scale-105 transition-all duration-200"
          >
            <InstagramIcon className="mr-2" size={20} />
            Follow Us on Instagram
            <ExternalLink className="ml-2" size={16} />
          </a>
        </div>

        <p className="text-gray-500 text-sm">
          🌟 Tag us in your dance videos to get featured!
        </p>
      </div>
    </section>
  );
};

export default Instagram;