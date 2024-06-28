import React from 'react';

const teamMembers = [
  {
    name: "SHARMISTHA BISWAS",
    title: "Director",
    description: [
      "Sharmistha Biswas is the Co-founder and Director of ONLINE SAVAARI PRIVATE LIMITED.",
      "Sharmistha is a well-known Optometrist from India and practicing for years. She is also the co-founder of Roxy Studio, a well-known brand from Mumbai. After the huge success of Roxy Studio, she took an initiative to make trouble-free travel for the travellers."
    ],
    imageUrl: "https://onlinesavaari.website/static/main/images/team/sharmistha_final.jpg"
  },
  {
    name: "VISHAL BHARATKAR",
    title: "Additional Director",
    description: [
      "Vishal Bharatkar is the Co-Founder & Additional Director of ONLINE SAVAARI PRIVATE LIMITED.",
      "Vishal is a well known businessman from India. In the past Vishal executed many business initiatives and made those successful. It is the first time he initiated a venture in the online travel industry. He is now ready to execute the 'trouble free travel for the travellers' initiative and make Online Savaari a leading online travel portal in India."
    ],
    imageUrl: "https://onlinesavaari.website/static/main/images/team/vishal_final.jpg"
  },
  {
    name: "KUSHAL CHAKRABORTY",
    title: " Chairman And CEO",
    description: [
      "Kushal Chakraborty is the Co-Founder & CEO of ONLINE SAVAARI PRIVATE LIMITED.",
      "Kushal is a well-known businessman from India. He is also Co-funder of Roxy studio, a well-known brand from Mumbai, and Convide Solutions, a well-known IT company from Mumbai. With his previous experience in the IT industry now he has come to join the initiative 'trouble free travel for the travellers' and is ready to make it the most successful online travel brand."
    ],
    imageUrl: "https://onlinesavaari.website/static/main/images/team/kushal_final.jpg"
  }
];

const LeadershipTeam = () => {
  return (
    <div className="max-w-[68rem] mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8">Online Savaari Leadership Team</h1>
      {teamMembers.map((member, index) => (
        <div key={index} className='mt-10'>
          <h2 className="text-xl font-bold text-gray-900 mb-2 bg-[#e4e4e4] p-3 rounded-md">
            {member.name}, <span className="text-sm font-normal ml-6">{member.title}</span>
          </h2>
          <div className="flex flex-col md:flex-row ">
            <div className="md:w-2/3">
              {member.description.map((desc, i) => (
                <p key={i} className="mb-4 text-[#999999]">
                  {desc}
                </p>
              ))}
            </div>
            <div className="md:w-1/3 mt-4 md:mt-0 md:pl-8">
              <img src={member.imageUrl} alt={member.name} className="w-full h-auto rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LeadershipTeam;

