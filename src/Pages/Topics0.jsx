import React from 'react'
import Navigation from '../Components/Navigation'
import Foot from '../Components/Foot'
import App from '../Components/App'


function Topics0() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen flex-col mt-8">
        <img src="/images/interests.png" alt="" className='mb-4' />
        <div className="backdrop-blur-md p-8 rounded-lg shadow-lg w-3/4 md:w-1/2">
         <img src="/images/pin.png" alt="" className='w-8 h-8'/>
          <h1 className='font-bold'>Hey! So this is about my hobbies and my interests</h1>
          <br />
          <p className='text-black '>
            I’m all about movies—the weirder the plot, the better! I love getting lost in those flicks that mess with your head and leave you questioning everything and somewhat confused. When I’m glued to the screen for another reason and that's Chess(I lose but thats the fun). I’m also obsessed with sports, especially cricket and football, whether I’m playing or just vibing with the boys watching a game
            <br />
            <br />

            On top of that, I’m a foodie, always out here trying to find the best spots to hog. I’ve also been getting into photography and video editing, capturing those dope moments and flipping them into something cool. <br />
            And of course, nothing beats just chilling with friends, cracking jokes, and having a blast.


          </p>
        </div>
      </div>
    </>
  )
}

export default Topics0
