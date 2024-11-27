import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation({ onContactsClick }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProfileClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const toTopOfHome = () =>{
    window.scrollTo({
      top : 0,
      behavior : 'smooth',
    })

  }

  return (
    <>
      <div className='w-full fixed top-0 left-0 bg-slate-700 h-16 flex items-center px-4 z-50'>
        {/* Circle Image Placeholder */}
        <div className='flex items-center justify-center space-x-3'>
          <div
            className='rounded-full w-12 h-12 overflow-hidden border-2 border-yellow-100 cursor-pointer '
            onClick={handleProfileClick}
          >
            <img
              src="/images/dp.jpg"
              alt="Profile pic"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className='text-white'>Jeethan Shan Tauro</h2>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className='flex space-x-7 ml-auto'>
          <Link to="/">
          <button className='text-white  hover:bg-yellow-200  hover:text-black transition duration-300 rounded-md p-2 ' onClick={toTopOfHome} >Home</button>
          </Link>
          <Link to="/about">
          <button className='text-white  hover:bg-yellow-200  hover:text-black transition duration-300 rounded-md p-2'>About me</button>
          </Link>
          <button className='text-white  hover:bg-yellow-200  hover:text-black transition duration-300 rounded-md p-2' onClick={onContactsClick}>Contact me</button>
          

        </div>
      </div>

      {/* Modal for Profile Image */}
      {isModalOpen && (
  <div
    className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'
  >
    <div className='bg-white p-4 rounded-lg relative z-60'>
      <button
        className='absolute top-2 right-2 text-black text-xl'
        onClick={handleCloseModal}
      >
        &times;
      </button>
      <img
        src="/images/dp.jpg"
        alt="Profile pic"
        className="w-96 h-96 object-cover rounded-lg"
      />
    </div>
  </div>
)}

    </>
  );
}

export default Navigation;
