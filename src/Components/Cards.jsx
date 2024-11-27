import React from 'react';
import { Link } from 'react-router-dom';

function Card({ title, description, tags, image }) {
  return (
    <>
    <div className="relative max-w-sm rounded overflow-hidden shadow-lg  transform transition-transform duration-300 hover:scale-105 bg-white">
      <img className="w-full" src={image} alt="Card top" />
      <div className="px-6 py-4 ">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 bg-white">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 "
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
    </>
  );
}

function Cards() {
  const cardsData = [
    {
      title: 'My interests and Hobbies',
      description:
        'When I’m not diving into code, you’ll find me exploring my hobbies and interests that keep me energized and inspired!',
      tags: ['#LoveToDo', '#TimePass', '#Activities'],
      image: '/images/Hobbies.jpg',
    },
    {
      title: 'My Technical works',
      description:
        'My fascination with tech comes from its endless possibilities to create, innovate, and solve real-world problems.',
      tags: ['#Stuck', '#Working', '#Learning'],
      image: '/images/techworks.jpg',
    },
    {
        title: 'MARVEL',
        description:
          'The MARVEL Club at UVCE is a platform for students passionate about exploring emerging technologies and innovation.',
        tags: ['#Interesting', '#CrazyStuff', '#CL-CY'],
        image: '/images/MARVEL.jpg',
    },
    {
        title: 'About Website',
        description:
          'This about how I created this website, the struggles I went through and different techs I used to build it. ',
        tags: ['#TookTime', '#AlmostGaveUp', '#TryingToDoBetter'],
        image: '/images/About.jpg', 
    },
    {
        title: 'FeedBack',
        description:
          "Well please do share any feedback about this website and I will make sure to work on it.Don't hesitate!",
        tags: ['#WillWorkOnIt', '#FeedBack', '#Thanks3000'],
        image: '/images/Feedback.jpg',
    },
    
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 p-4">
      {cardsData.map((card, index) => (
        <Link to={`/topics/${index}`}>
        <Card
          key={index}
          title={card.title}
          description={card.description}
          tags={card.tags}
          image={card.image}
        />
        </Link>
      ))}
    </div>
  );
}

export default Cards;
