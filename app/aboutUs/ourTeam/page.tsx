import Image from 'next/image';

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'Goodnews Igwe',
      title: 'Chief Executive Officer',
      image: '/goodnews.png',
    },
    {
      name: 'Chimene Chinah',
      title: 'Chief Operation Officer',
      image: '/chimene.png',
    },
    {
      name: 'Godwin Jimmy',
      title: 'Chief Technology Officer',
      image: '/godwin.png',
    },
    {
      name: 'Nengi A Bob-Manuel',
      title: 'Head of Finance',
      image: '/nengi.png',
    },
    {
      name: 'Bilikis Oriniowo-Yakubu',
      title: 'Head of Human Resource',
      image: '/bilikis.png',
    },
    {
      name: 'Paul Ugochukwu',
      title: 'Growth Manager',
      image: '/paul.png',
    },
  ];

  return (
    <div className="p-8 text-left">
      <h1 className="text-6xl font-bold text-blue-500 mb-8">
        <span className="block">Our</span>
        <span className="block mt-4">Team</span>
      </h1>

      <div className="grid grid-cols-3 gap-x-0 gap-y-2 justify-items-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center bg-transparent shadow-none">
            <Image
              src={member.image}
              alt={member.name}
              width={350}
              height={350}
              className="rounded-full w-[350px] h-[350px]"
            />
            <div className="text-lg font-bold text-gray-900 mt-2 text-shadow transform perspective-[500px] rotate-x-[10deg]">
              {member.name}
            </div>
            <p className="text-base text-gray-600 mt-1">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
