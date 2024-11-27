import React from 'react';

const Foot = React.forwardRef((props, ref) => {
  return (
    <>
      <footer className="flex flex-col items-center justify-center py-8" ref={ref}>
        <ul className="space-y-2">
          {/*this is number */}
          <li className="flex items-center space-x-2">
            <img src="/images/contacts.png" alt="" className="w-6 h-6" />
            <span >Contact: +91 81237 00939</span>
          </li>


          {/*this is email*/}
          <li className="flex items-center space-x-2">
            <a href="mailto:tauroshanjeeth@gmail.com" className='flex justify-center space-x-2'>
            <img src="/images/email.png" alt="" className="w-6 h-6" />
            <span >Email: tauroshanjeeth@gmail.com</span>
            </a>
          </li>

          {/*this is github */}
          <li className="flex items-center space-x-2">
            <a href="https://github.com/JeethanTauro" target='_blank' className='flex justify-center space-x-2'>
              <img src="/images/github.png" alt="" className="w-6 h-6" />
              <span > Github</span>
            </a>
          </li>

          {/*this is linked in */}

          <li className="flex items-center space-x-2">
            <a href="https://www.linkedin.com/in/jeethan-tauro-1581751b3/" target='_blank' className='flex justify-center space-x-2'>
              <img src="/images/linkedin.png" alt="" className="w-6 h-6" />
              <span >LinkedIn</span>
            </a>
          </li>


          {/*this is instagram */}
          <li className="flex items-center space-x-2">
            <a href="https://www.instagram.com/jeethan_xyz/" target='_blank' className='flex justify-center space-x-2'>
              <img src="/images/instagram.png" alt="" className="w-6 h-6" />
              <span >Instagram</span>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
})

export default Foot;
