import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Classes from './components/Classes';
import Instructors from './components/Instructors';
import MediaReviews from './components/MediaReviews';
import Registration from './components/Registration';
import Instagram from './components/Instagram';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Classes />
      <Instructors />
      <MediaReviews />
      <Registration />
      <Instagram />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;