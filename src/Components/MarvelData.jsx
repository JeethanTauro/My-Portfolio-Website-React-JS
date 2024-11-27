import React from 'react';

function Comp({ title, description, link}) {
  return (
    <div className="w-full md:w-1/3 p-2">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div
          className={`backdrop-blur-md p-6 rounded-lg shadow-lg bg-white bg-opacity-70 h-auto transition-all duration-300 ease-in-out `}
        >
          <img src="/images/pin.png" alt="" className="w-8 h-8 mb-4" />
          <h1 className="font-bold text-lg mb-2 text-center">{title}</h1>
          <p className="text-black text-sm text-center">{description}</p>
        </div>
      </a>
    </div>
  );
}

function MarvelData() {
  const marvelData = [
    {
      title: 'So what is MARVEL?',
      description:
        'The MARVEL Club (Makerspace for Advanced Research, Vital Education, and Learning) is basically where all the tech nerds and innovators chill. It’s the spot to learn, build, and mess around with cool stuff like cloud computing, cybersecurity, AI, and IoT. There’s always something happening—projects, hackathons, workshops, you name it. The best part? You get to vibe with people who are just as into this stuff as you are, work on real-world problems, and pick up some dope skills. It’s honestly the perfect place to learn, boost your resume, and have a good time doing it!',
    },
    {
      title: 'What am I working on?',
      description:
        'Well, I joined MARVEL in 2024 and I am in CL-CY domain (Cybersecurity and Cloud computing) and have worked on topics such as networking, encryption, Linux commands, Git commands, and learned JavaScript too. It helped me a lot in understanding network security and how the internet works. I highly recommend joining Marvel if you haven’t yet. I am currently working on a project called "speed clicker".',
    },
    {
      title: 'Personal challenges',
      description:
        'Was MARVEL difficult? Oh yes it was, going through different materials and resources, youtube videos, articles and then trying to understand them and then finally write a report on it, its difficult.. you feel like giving up but then you learn a lot',
    },
    {
      title: 'Here are some MARVEL projects',
      description: (
        <div>
        <div className='flex justify-center'>
        <ul className='list-disc list-inside text-left'>
          <li>Chat app using Python</li>
          <li>Weather web App</li>
          <li>Web scraping Program</li>
          <li>Encryption Program</li>
          <li>and many more...</li>
        </ul>
        </div>
        <a href="https://github.com/JeethanTauro/Marvel-Level-1-Tasks" target='_blank' rel="noopener noreferrer">
            <button className='rounded-lg hover:bg-yellow-200 p-2 transition duration-300' target='_blank' title='Link to github'>
              <img src="/images/github.png" alt="Link to Github" className="w-6 h-6" />
            </button>
          </a>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-start p-4 gap-4 mt-14">
      {marvelData.map((item, index) => (
        <Comp
          key={index}
          title={item.title}
          description={item.description}
          link={item.link}
        />
      ))}
    </div>
  );
}

export default MarvelData;
