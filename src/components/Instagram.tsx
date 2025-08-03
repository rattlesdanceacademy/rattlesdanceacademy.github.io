import React from 'react';
import { Instagram as InstagramIcon, ExternalLink } from 'lucide-react';

const videoFiles = [
  "/video/videoplayback1.mp4"
  // Add more video paths here, e.g. "/video/videoplayback2.mp4"
];

// Helper to get a random video
const getRandomVideo = () => {
  const idx = Math.floor(Math.random() * videoFiles.length);
  return videoFiles[idx];
};
<script type="text/javascript" src="https://www.juicer.io/embed/rattles_dance_academy/embed-code.js" async defer></script>

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

          <div className="mb-8 flex justify-center">
            <iframe
              src="https://www.juicer.io/api/feeds/rattles_dance_academy/iframe"
              frameBorder="0"
              width="1000"
              height="1000"
              style={{ display: "block", margin: "0 auto" }}
              title="Juicer Instagram Feed"
            ></iframe>
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