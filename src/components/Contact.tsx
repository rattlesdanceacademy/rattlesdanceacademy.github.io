import React from 'react';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/917200420121', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:7200420121';
  };

  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Start Dancing Today!
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to begin your dance journey? Get in touch with us to book your free trial class 
            or learn more about our programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="text-gray-800" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-300">7200420121</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="text-gray-800" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-300">Chennai, Tamil Nadu</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="text-gray-800" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Class Hours</p>
                    <p className="text-gray-300">Mon-Sat: 9 AM - 8 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-600 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Special Offer!</h3>
              <p className="text-lg mb-6">
                🎉 Book your first class now and get a FREE trial session worth ₹500!
              </p>
              <p className="text-sm opacity-90">
                *Valid for new students only. Offer expires soon!
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-white rounded-2xl p-8 text-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-center">Ready to Start?</h3>
              
              <div className="space-y-4">
                <button
                  onClick={handleCall}
                  className="w-full bg-yellow-400 text-gray-800 font-semibold py-4 px-6 rounded-lg hover:bg-yellow-500 transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
                >
                  <Phone className="mr-3" size={20} />
                  Book a Free Trial
                </button>
                
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-green-500 text-white font-semibold py-4 px-6 rounded-lg hover:bg-green-600 transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
                >
                  <MessageCircle className="mr-3" size={20} />
                  Contact Us on WhatsApp
                </button>
              </div>
            </div>

            <div className="bg-gray-700 rounded-2xl p-8">
              <h4 className="text-xl font-bold mb-4">Why Choose Us?</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Expert instructors with 10+ years experience
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Small class sizes for personalized attention
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Modern facilities with sound systems
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Flexible timing options
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Performance opportunities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;