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

function CertificationsData() {
  const certificationsData = [
    {
      title: "Kagada Certificate",
      description:
        <div>
            <img src="/images/certificateKagada.png" alt="" className='rounded-md'/>

        </div>,
    },
    {
      title: 'Codefury Certificate',
      description:
        <div>
          <img src="/images/certificateCodefury.png" alt="Kagada Certificate" className='rounded-md' />

        </div>,
    },
    {
      title: 'Bit-and-Build',
      description:
        <div>
          <img src="/images/certificateBitandBuild.png" alt="Bit and Build certificate" className='rounded-md'/>
        </div>
    },
    {
      title: 'Samsung Hackathon Certificate',
      description:
      <div>
        <img src="/images/certificateSamsung.png" alt="Samsung Certificate" className='rounded-md'/>
      </div>
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-start p-4 gap-4 mt-14">
      {certificationsData.map((item, index) => (
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

export default CertificationsData;
