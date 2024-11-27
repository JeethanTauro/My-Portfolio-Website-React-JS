import React from 'react';

function Comp({ title, description }) {
  return (
    <>
    <div className="w-full md:w-1/3 p-2">
      <div className="backdrop-blur-md p-6 rounded-lg shadow-lg bg-white bg-opacity-70 h-auto">
        <img src="/images/pin.png" alt="Icon" className="w-8 h-8 mb-4" />
        <h1 className="font-bold text-lg mb-2 text-center">{title}</h1>
        <div className="text-black text-sm text-center">{description}</div>
      </div>
    </div>
    </>
  );
}

function TechData() {
  const techData = [
    {
      title: 'Codefury Hackathon',
      description: (
        <div>
          <div className="flex flex-col justify-center items-center gap-4">
            <img
              src="/images/codefury1.png"
              alt="Codefury Image 1"
              className="w-full h-auto object-contain rounded-lg"
            />
            <img
              src="/images/codefury2.png"
              alt="Codefury Image 2"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
          <p className="mt-4">
            So in this hackathon me and my team worked on creating a disaster
            management website where we had to integrate different features such as SOS button, mapping of disasters, and spreading awareness about disasters and how to manage them. I learned a lot in this hackathon from my teammates, including how to use Git and GitHub, how to use AI, and teamwork. Special thanks to my team for helping out
            <a
              href="https://www.linkedin.com/in/dhruv-rathi-399378282/"
              className="underline mx-1 rounded-md p-1 hover:bg-purple-200 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dhruv Rathi
            </a>
            <a
              href="https://www.linkedin.com/in/lahari-priya-n-62bb822a2/"
              className="underline mx-1 rounded-md p-1 hover:bg-purple-200 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lahari Priya
            </a>
            <a
              href="https://www.linkedin.com/in/adarsh-sh-582891297/"
              className="underline mx-1 rounded-md p-1 hover:bg-purple-200 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Adarsh
            </a>.
          </p>
          <div className='flex justify-center mt-2'>
          <a href="https://github.com/JeethanTauro/codefury07" target="_blank" title='Link to github' rel="noopener noreferrer">
            <button className="rounded-lg hover:bg-yellow-200 p-2 transition duration-300">
              <img src="/images/github.png" alt="Link to GitHub" className="w-6 h-6" />
            </button>
          </a>
          <a href="https://safe-zone360.vercel.app/" target='_blank' title='Link to website' rel="noopener noreferrer">
          <button className="rounded-lg hover:bg-yellow-200 transition duration-300">
              <img src="/images/codefurywebsite.png" alt="" className='w-10 h-10'/>
            </button>
          </a>
          </div>
        </div>
      ),
    },
    {
      title: 'Kagada Technical Fest',
      description: (
        <div>
          <div className="flex justify-center">
            <img
              src="/images/kagadaposter1.png"
              alt="Kagada Poster"
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
          <p className="mt-4">
            Kagada is a technical fest in which we can participate in different tracks such as poster track, project track, or research paper track. I participated in the poster track and made a poster about cleaning solar panels without using water by leveraging static electricity. This idea is backed by MIT research to save millions of gallons of water.
          </p>
        </div>
      ),
    },
    {
      title: 'Samsung Hackathon',
      description: (
        <div>
          <div className="flex flex-col justify-center items-center gap-4">
            <img
              src="/images/samsung1.png"
              alt="Samsung Hackathon Image 1"
              className="w-full h-auto object-contain rounded-lg"
            />
            <img
              src="/images/samsung2.png"
              alt="Samsung Hackathon Image 2"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
          <p className="mt-4">
            Here my team participated in a Hackathon organized by Samsung, and the problem statement was to make a "model people movement" solution to improve city mobility. The results are not out yet, so fingers crossed! A huge thanks to my teammates:
            <a
              href="https://www.linkedin.com/in/yashaswini-bhushan-7b73032b1/"
              className="underline mx-1 rounded-md p-1 hover:bg-purple-200 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yashaswini Bhushan
            </a>
            <a
              href="https://www.linkedin.com/in/rohan-shalom-475872311/"
              className="underline mx-1 rounded-md p-1 hover:bg-purple-200 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rohan Shalom
            </a>
            <a
              href="https://www.linkedin.com/in/yashaswini-c-rao/"
              className="underline mx-1 rounded-md p-1 hover:bg-purple-200 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yashaswini C Rao
            </a>
            <a
              href="https://www.linkedin.com/in/suhail-sharieff-2a4500290/"
              className="underline mx-1 rounded-md p-1 hover:bg-purple-200 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Suhail Sharieff
            </a>.
          </p>
          <a
            href="https://docs.google.com/presentation/d/1KGpHbP7dh3p2I1PJi9Fngofht9QdvbwITgA7OsZduM8/edit#slide=id.g3193ac654af_4_11"
            target="_blank"
            title='Link to Google Slides'
            rel="noopener noreferrer"
          >
            <button className="rounded-lg hover:bg-yellow-200 p-2 transition duration-300 font-bold">
              PPT
            </button>
          </a>
        </div>
      ),
    },
    {
      title: 'Bit-And-Build',
      description:
      <div className='flex justify-center items-center flex-col'>
        <div className='w-3/4'>
        <div>
          {/* Make the images responsive */}
          <img src="/images/bit1.png" alt="" className="w-full h-auto object-contain rounded-lg"/>
        </div>
        </div>
        <p className='mt-4'>
          Bit-And-Build is a hackathon that is organized by Google Developer Student Clubs-CRCE. Our problem statement was to build a Wardrobe Management System, and we had to integrate features such as calendars, reminders, and implement an idea that reduces the wastage of clothes. 
          A huge thanks to my teammates 
          <a href="https://www.linkedin.com/in/sumanth-g-a444552b7/" className='underline rounded-md p-1 hover:bg-purple-200 transition duration 300' target='_blank' rel="noopener noreferrer">Sumanth G</a> and 
          <a href="https://www.linkedin.com/in/amoghavarsha-b-93a979287/" className='underline  rounded-md p-1 hover:bg-purple-200 transition duration 300' target='_blank' rel="noopener noreferrer">Amoghavarsha</a> 
          for coming up with ideas and designs. We got shortlisted for the second round but could not go further. <br />
          <a href="https://github.com/JeethanTauro/Bit-n-Build-2024" target='_blank' title='Link to github' rel="noopener noreferrer">
            <button className='rounded-lg hover:bg-yellow-200 p-2 transition duration-300' >
              <img src="/images/github.png" alt="Link to Github" className="w-6 h-6" />
            </button>
          </a>
        </p>
      </div>
    },
    
    {
      title: 'Shark Tank UVCE',
      description:
        <div>
          <div className='flex justify-center'>
            {/* Make the image responsive */}
            <img src="/images/powerbite.png" alt="" className='h-auto w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg' />
          </div>
          <p className='mt-4'>
            Shark Tank UVCE was an initiative which was taken up by 
            <a href="https://www.instagram.com/mycampuschamp/" className='underline mr-1 ml-1 rounded-md p-1 hover:bg-purple-200 transition duration 300' target='_blank' rel="noopener noreferrer">Campus Champs</a> to teach us about teamwork, product management, critical analysis, financing, overcoming challenges, and many more skills during our soft skills program. Our team came up with an idea of providing healthy meals and protein-rich food by partnering with gyms. We secured a top 5 spot out of 20+ ideas in our college. <br />
            <a href="https://docs.google.com/presentation/d/10DpCtKxCLibyc-cNHixFdbz0Xm6lSJXr-7aUKQtHfzs/edit?usp=sharing" target='_blank' title='Link to Google slides' rel="noopener noreferrer">
              <button className='rounded-lg hover:bg-yellow-200 p-2 transition duration-300 font-bold'>PPT</button>
            </a>
          </p>
        </div>
    },
    { title : "SecureHack Hackathon",
      description : 
      <div>
        <div className='flex flex-col space-y-2'>
          <img src="/images/securehack1.png" alt="" className='w-full h-auto object-contain rounded-md'/>
          <img src="/images/securehack2.png" alt="" className='w-full h-auto object-contain rounded-md'/>
        </div>
        <p className='mt-4'>
        In a recent hackathon, my team and I came up with 'Situational Game', a website designed to raise awareness about hacking and cyberattacks. Users are presented with real-life scenarios and must choose the safest option to protect their security. Depending on their choice, they receive detailed feedback explaining the outcomes.
        This interactive approach makes learning about cybersecurity fun and practical, helping users understand how to stay safe online! Thanks to my teammates, once again:  
          <a
              href="https://www.linkedin.com/in/yashaswini-bhushan-7b73032b1/"
              className="underline mx-1 rounded-md p-1 hover:bg-purple-200 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yashaswini Bhushan
            </a>
            <a
              href="https://www.linkedin.com/in/rohan-shalom-475872311/"
              className="underline mx-1 rounded-md p-1 hover:bg-purple-200 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rohan Shalom
            </a>
            <a
              href="https://www.linkedin.com/in/yashaswini-c-rao/"
              className="underline mx-1 rounded-md p-1 hover:bg-purple-200 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yashaswini C Rao
            </a>
        </p>


      </div>

    },
    
  ];

  return (
    <div className="flex flex-wrap justify-center items-start p-4 gap-4 mt-14">
      {techData.map((item, index) => (
        <Comp key={index} title={item.title} description={item.description} />
      ))}
    </div>
  );
}

export default TechData;
