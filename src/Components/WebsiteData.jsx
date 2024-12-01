import React from 'react';

function Comp({ title, description}) {
  return (
    <div className="w-full md:w-1/3 p-2">
        <div
          className='backdrop-blur-md p-6 rounded-lg shadow-lg bg-white bg-opacity-70 h-auto'
        >
          <img src="/images/pin.png" alt="" className="w-8 h-8 mb-4" />
          <h1 className="font-bold text-lg mb-2 text-center">{title}</h1>
          <p className="text-black text-sm ">{description}</p>
        </div>
        
    </div>
  );
}

function WebsiteData() {
  const websiteData = [
    {
      title: 'Initial designs',
      description:
        <p>So the initial design of the website was heavily inspired by one of my coordinators of CL-CY in MARVEL, you can check his website out too. I didn't sketch anything, I just had a design on my mind an went with it. I am not an experienced Web developer and I am still working on how to go about it.
            <br />
        <a href="https://abyi.xyz/" target='_blank' rel="noopener noreferrer">
        <button className="hover:bg-yellow-200 p-2 transition duration-300 rounded-lg">My Coordinators website</button>
        
        </a>
        </p>,
    },
    {
      title: 'What are the challenges I faced ?',
      description :
      <ul className='list-outside list-disc'>
        The main challenge was to start coding, well I got over that one lol, the other challenges were : 
        <br />
        <br />
        <li>Which tech stack to use?</li>
        <li>After chosing the tech stack, designing was a problem</li>
        <li>Complexity of the frameworks and libraries</li>
        <li>HTML and CSS was a huge pain</li>
        <li>Debugging "ew, thats awful" </li>
        <li>Feeling to give up... I almost did lol </li>
    </ul>
      ,
    },
    {
      title: 'Solutions to the challenges',
      description:
      <ul className='list-outside list-disc'>
        These are the solutions I came up with might help you: 
        <br />
        <br />
        <li>Saw some youtube tutorials about React and JavaScript and understood its basics</li>
        <li>Even though I designed it in my head I highly recommend use 'pen and paper' method or any other designing software</li>
        <li>React is an easy library to work with but still it has its intricacies, just go to its docs or chatgpt or search up a tutorial</li>
        <li>Just use Tailwind CSS and live life easily</li>
        <li>Just work on the website one day at a time don't try to make a website in one day like youtubers </li>
    </ul>
      ,
    },
    {
      title: 'Why does my website look funny?',
      description: "So here's the thing, I wanted to make reusible card components and use it on the entire website so that i can learn reusibility as its difficult to make each and every component for each and every page and also I am lazy. In the future I might change some stuff but for now this is the website (looks boring I know). I wanted my website to look homogenous and simplistic too.",
    },
    {
      title: 'Is it neccessary to have a portfolio website ?',
      description:"If you are in an IT branch then its a very good thing to have on your resume but the more important thing is that it teaches you how to make websites, debugging, teamwork(if you are making it with a friend) and also much more, so I highly recommend making one even if its just HTML CSS , doesnt matter make one and then keep improvising",
      
    },
    {
        title: "Links to all the resources",
        description: (
          <ul className='list-outside list-disc'>
            <li>
              <a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noopener noreferrer">
                <button className="hover:bg-yellow-200 p-2 transition duration-300 rounded-lg">Tailwind docs</button>
                
              </a>
            </li>

            <li >
              <a href="https://www.youtube.com/watch?v=vz1RlUyrc3w&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige" target="_blank" rel="noopener noreferrer">
                <button className="hover:bg-yellow-200 p-2 transition duration-300 rounded-lg">React playlist</button>
              </a>
            </li>

            <li>
              <a href="https://www.youtube.com/watch?v=Hr5iLG7sUa0&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37" target="_blank" className="block" rel="noopener noreferrer">
              <button className="hover:bg-yellow-200 p-2 transition duration-300 rounded-lg">Java Script playlist</button>
              </a>
            </li>

            <li>
              <a href="https://icons8.com/icons" target="_blank" className="block" rel="noopener noreferrer">
              <button className="hover:bg-yellow-200 p-2 transition duration-300 rounded-lg">Icons for my website</button>
              </a>
            </li>

            <li>
              <a href="https://apps.microsoft.com/detail/9nht9rb2f4hd?hl=en-US&gl=US" target="_blank" className="block" rel="noopener noreferrer">
              <button className="hover:bg-yellow-200 p-2 transition duration-300 rounded-lg">Copilot for illustrations</button>
              </a>
            </li>

            <li>
              <a href="https://apps.microsoft.com/detail/9nht9rb2f4hd?hl=en-US&gl=US" className="block" rel="noopener noreferrer">
              <button className="hover:bg-yellow-200 p-2 transition duration-300 rounded-lg">Background patterns using Tailwind CSS</button>
              </a>
            </li>

            <li>
              <a href="https://chatgpt.com/" rel="noopener noreferrer">
              <button className="hover:bg-yellow-200 p-2 transition duration-300 rounded-lg">Chatgpt for debugging and code snippets</button>
              </a>
            </li>
          </ul>
        ),
      }
  ];

  return (
    <div className="flex flex-wrap justify-center items-start p-4 gap-4 mt-14">
      {websiteData.map((item, index) => (
        <Comp
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
      
    </div>
  );
}

export default WebsiteData;
