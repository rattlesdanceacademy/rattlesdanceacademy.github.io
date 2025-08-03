import React from 'react';
import { Phone, Instagram, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-gray-800 font-bold text-lg">RDA</span>
              </div>
              <h3 className="text-xl font-bold">🕺 Thriller Moves Academy 🕺</h3>
            </div>
            <p className="text-gray-400">
              "Don't Stop 'Til You Get Enough" - Unleashing legends since 2020
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Phone size={18} className="mr-2 text-red-400" />
              <span className="font-semibold">7200420121</span>
            </div>
            <p className="text-gray-400 text-sm">
              "Just call my name" - For inquiries and bookings
            </p>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <a
              href="https://www.instagram.com/rattles_dance_academy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-red-400 hover:text-yellow-400 transition-colors duration-200"
            >
              <Instagram size={20} className="mr-2" />
              @rattles_dance_academy
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart size={16} className="mx-2 text-red-500" /> for MJ & dance legends
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2025 Thriller Moves Academy. "You Rock My World!" All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-1">
            🎵 "It don't matter if you're black or white" - Everyone welcome! 🎵
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;