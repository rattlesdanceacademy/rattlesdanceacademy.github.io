import React, { useState } from 'react';
import { User, Mail, Phone, Calendar, Users, FileText, Download } from 'lucide-react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  danceClass: string;
  experience: string;
  medicalConditions: string;
  emergencyContact: string;
  emergencyPhone: string;
  parentName: string;
  parentPhone: string;
  preferredTime: string;
  hearAboutUs: string;
  additionalNotes: string;
}

const Registration: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    danceClass: '',
    experience: '',
    medicalConditions: '',
    emergencyContact: '',
    emergencyPhone: '',
    parentName: '',
    parentPhone: '',
    preferredTime: '',
    hearAboutUs: '',
    additionalNotes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const danceClasses = [
    'Little Moonwalkers (3-6 Years)',
    'Beat It Kids (7-12 Years)', 
    'Thriller Teens (13-18 Years)',
    'Smooth Criminal Adults (19+ Years)',
    'Dance Legends Fusion (All Ages)',
    'King of Pop Classics (10+ Years)'
  ];

  const timeSlots = [
    'Morning (9 AM - 12 PM)',
    'Afternoon (1 PM - 4 PM)',
    'Evening (5 PM - 8 PM)',
    'Weekend Only',
    'Flexible'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const saveToExcel = (data: FormData) => {
    // Create a new workbook
    const wb = XLSX.utils.book_new();
    
    // Convert form data to array format for Excel
    const wsData = [
      ['Field', 'Value'],
      ['Registration Date', new Date().toLocaleDateString()],
      ['Full Name', data.fullName],
      ['Email', data.email],
      ['Phone', data.phone],
      ['Age', data.age],
      ['Dance Class', data.danceClass],
      ['Experience Level', data.experience],
      ['Medical Conditions', data.medicalConditions],
      ['Emergency Contact', data.emergencyContact],
      ['Emergency Phone', data.emergencyPhone],
      ['Parent/Guardian Name', data.parentName],
      ['Parent/Guardian Phone', data.parentPhone],
      ['Preferred Time', data.preferredTime],
      ['How did you hear about us?', data.hearAboutUs],
      ['Additional Notes', data.additionalNotes]
    ];

    // Create worksheet
    const ws = XLSX.utils.aoa_to_sheet(wsData);
    
    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Registration');
    
    // Generate Excel file and save
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    
    const fileName = `Dance_Registration_${data.fullName.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.xlsx`;
    saveAs(blob, fileName);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to Excel file
      saveToExcel(formData);
      
      setSubmitMessage('🎉 Registration successful! Your Excel file has been downloaded. "You Rock My World!" 🕺');
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        age: '',
        danceClass: '',
        experience: '',
        medicalConditions: '',
        emergencyContact: '',
        emergencyPhone: '',
        parentName: '',
        parentPhone: '',
        preferredTime: '',
        hearAboutUs: '',
        additionalNotes: ''
      });

    } catch (error) {
      setSubmitMessage('❌ Registration failed. Please try again. "Don\'t Stop \'Til You Get Enough!" 💪');
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(''), 5000);
  };

  return (
    <section id="registration" className="py-20 bg-gradient-to-br from-purple-900 via-black to-red-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            🌟 Join the Legend's Legacy 🌟
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            "Don't Stop 'Til You Get Enough" - Register now and start your journey to greatness!
          </p>
          <div className="text-yellow-400 font-semibold text-lg">
            ✨ "It Don't Matter If You're Black or White" - Everyone Welcome! ✨
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-yellow-400/30">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  <User className="inline mr-2" size={18} />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  <Mail className="inline mr-2" size={18} />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  <Phone className="inline mr-2" size={18} />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  <Calendar className="inline mr-2" size={18} />
                  Age *
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                  min="3"
                  max="100"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50"
                  placeholder="Your age"
                />
              </div>
            </div>

            {/* Dance Class Selection */}
            <div>
              <label className="block text-white font-semibold mb-2">
                <Users className="inline mr-2" size={18} />
                Preferred Dance Class *
              </label>
              <select
                name="danceClass"
                value={formData.danceClass}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50"
              >
                <option value="" className="text-gray-800">Select a class</option>
                {danceClasses.map((cls, index) => (
                  <option key={index} value={cls} className="text-gray-800">{cls}</option>
                ))}
              </select>
            </div>

            {/* Experience Level */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Dance Experience Level *
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50"
              >
                <option value="" className="text-gray-800">Select experience level</option>
                <option value="Beginner" className="text-gray-800">Beginner - "Just Beat It" starter</option>
                <option value="Intermediate" className="text-gray-800">Intermediate - "Smooth Criminal" level</option>
                <option value="Advanced" className="text-gray-800">Advanced - "Thriller" master</option>
                <option value="Professional" className="text-gray-800">Professional - "King of Pop" level</option>
              </select>
            </div>

            {/* Preferred Time */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Preferred Class Time *
              </label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50"
              >
                <option value="" className="text-gray-800">Select preferred time</option>
                {timeSlots.map((time, index) => (
                  <option key={index} value={time} className="text-gray-800">{time}</option>
                ))}
              </select>
            </div>

            {/* Emergency Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Emergency Contact Name *
                </label>
                <input
                  type="text"
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50"
                  placeholder="Emergency contact name"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Emergency Contact Phone *
                </label>
                <input
                  type="tel"
                  name="emergencyPhone"
                  value={formData.emergencyPhone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            {/* Parent/Guardian Info (for minors) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Parent/Guardian Name (if under 18)
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50"
                  placeholder="Parent/Guardian name"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Parent/Guardian Phone (if under 18)
                </label>
                <input
                  type="tel"
                  name="parentPhone"
                  value={formData.parentPhone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            {/* Medical Conditions */}
            <div>
              <label className="block text-white font-semibold mb-2">
                <FileText className="inline mr-2" size={18} />
                Medical Conditions or Injuries
              </label>
              <textarea
                name="medicalConditions"
                value={formData.medicalConditions}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50"
                placeholder="Any medical conditions we should know about? (Optional)"
              />
            </div>

            {/* How did you hear about us */}
            <div>
              <label className="block text-white font-semibold mb-2">
                How did you hear about us?
              </label>
              <select
                name="hearAboutUs"
                value={formData.hearAboutUs}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50"
              >
                <option value="" className="text-gray-800">Select an option</option>
                <option value="Instagram" className="text-gray-800">Instagram</option>
                <option value="Facebook" className="text-gray-800">Facebook</option>
                <option value="Google Search" className="text-gray-800">Google Search</option>
                <option value="Friend/Family" className="text-gray-800">Friend/Family Referral</option>
                <option value="Local Advertisement" className="text-gray-800">Local Advertisement</option>
                <option value="Other" className="text-gray-800">Other</option>
              </select>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Additional Notes
              </label>
              <textarea
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50"
                placeholder="Tell us about your dance goals, favorite MJ songs, or anything else you'd like us to know!"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-yellow-400 to-red-500 text-black font-bold py-4 px-12 rounded-full hover:from-yellow-300 hover:to-red-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Download className="inline mr-2 animate-spin" size={20} />
                    Processing Registration...
                  </>
                ) : (
                  <>
                    🕺 Register & Download Excel 🕺
                  </>
                )}
              </button>
            </div>

            {/* Submit Message */}
            {submitMessage && (
              <div className={`text-center p-4 rounded-lg ${
                submitMessage.includes('successful') 
                  ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                  : 'bg-red-500/20 text-red-300 border border-red-500/30'
              }`}>
                {submitMessage}
              </div>
            )}
          </form>
        </div>

        {/* Info Section */}
        <div className="mt-12 text-center">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/30">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              🎵 "Remember the Time" - Important Notes 🎵
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
              <div>
                <h4 className="font-semibold text-yellow-300 mb-2">Registration Process:</h4>
                <ul className="text-sm space-y-1 text-left">
                  <li>• Fill out the complete form</li>
                  <li>• Excel file downloads automatically</li>
                  <li>• We'll contact you within 24 hours</li>
                  <li>• Free trial class included!</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-300 mb-2">What to Bring:</h4>
                <ul className="text-sm space-y-1 text-left">
                  <li>• Comfortable dance clothes</li>
                  <li>• Water bottle</li>
                  <li>• Positive attitude</li>
                  <li>• Ready to "Beat It"!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;