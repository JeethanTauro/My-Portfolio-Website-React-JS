import React from 'react';
import Navigation from '../Components/Navigation';
import Foot from '../Components/Foot';
function AboutPage() {
  return (
    <>
    <div className="flex justify-center items-center min-h-screen flex-col mt-8 ">
        <img src="/images/Aboutme.png" alt="About me " className='w-40 h-40' />
      <div className="backdrop-blur-md p-8 rounded-lg shadow-lg w-3/4 md:w-1/2">
        <h1 className="text-xl font-bold mb-4 text-black">Hi there!</h1>
        <p className='text-black'>
          I'm Jeethan Shan Tauro, a 2nd-year B.Tech CSE student at UVCE (University of Visvesvaraya College of Engineering). I have a strong passion for programming and problem-solving, which has helped me score an 8.9 CGPA in my first year. 
          <br />
          <br />
          I’m also an active member of two clubs—GDG (Google Developers Group), where I’m part of the designing team, and MARVEL, where I’m exploring the CL-CY domain (Cloud Computing and Cybersecurity) as a batch student.
          <br />
          <br />
          When I’m not busy with academics or club activities, I enjoy learning new skills and tackling creative challenges. That’s a little bit about me! If you’re curious to know more, feel free to check out my resume below. 😊
        </p>
      </div>
    </div>
    <div className='flex justify-center'>
      <a href="/images/JeethanResume.pdf" target='_blank'>
      <button className='border-solid border-2 border-black p-2 mt-4 mb-4 hover:bg-yellow-200 rounded-lg transistion duration-300'>My Resume</button>
      </a>
    </div>
  </>
  );
}

export default AboutPage;
