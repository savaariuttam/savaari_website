import React from 'react';

const sections = [
  {
    icon: "https://onlinesavaari.website/static/main/images/icon/why/1.png",
    title: "Great Peers",
    description: "We are a team of achievers. Our folks are ambitious, go getters, fun loving, aware and proactive."
  },
  {
    icon: "https://onlinesavaari.website/static/main/images/icon/why/2.png",
    title: "Most Trusted Brand",
    description: "With a strong focus on fulfilling customer needs and service, we are the most trusted online travel brand."
  },
  {
    icon: "https://onlinesavaari.website/static/main/images/icon/why/3.png",
    title: "Fun @ Work",
    description: "Hackathons, Cricket Matches, Festival Celebrations, Yummy Food Stalls, Surprise Games... working with us is never boring!"
  },
  {
    icon: "https://onlinesavaari.website/static/main/images/icon/why/4.png",
    title: "Open Culture",
    description: "Every view and opinion is heard and respected. We talk to people not their designations."
  }
];

const WhyOnlineSavaari = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-2xl font-bold mb-6">Why Online Savaari?</h1>
      <p className="text-center max-w-4xl mb-10 w-full">
        Working at Yatra is bound to be one of the most amazing experiences of your life. The bonds you build, the friends you make and the stupendous learning opportunities you get, are just some of these.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <div key={index} className="flex p-4 items-center gap-8">
            <img src={section.icon} alt={section.title} className="w-12 h-12 mb-4" />
            <div className='flex flex-col justify-start w-96'>
              <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
              <p className='text-[#999999]'>{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyOnlineSavaari;

