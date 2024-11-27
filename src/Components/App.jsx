import React, { useRef } from 'react';
import Navigation from './Navigation';
import Foot from './Foot'; // Footer Component
import Cards from './Cards';
import About from './About';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './Scrolltotop.jsx';

function App() {
  const contactRef = useRef(null);


  // Scroll to Footer Section
  const onContactsClick = () => {
    contactRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <ScrollToTop />
      <Navigation 
        onContactsClick={onContactsClick} 
      />
      <Outlet />
    <Foot ref={contactRef} />

      
    </div>
  );
}

export default App;
