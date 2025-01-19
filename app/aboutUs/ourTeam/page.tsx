import Image from 'next/image';
import styles from './OurTeam.module.css'; // Ensure to create and import this CSS module

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
    <div className={styles.teamSection}>
      <h1 className={styles.teamHeading}>
        <span className={styles.block}>Our</span>
        <span className={styles.block}>Team</span>
      </h1>

      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.teamMember}>
            <Image
              src={member.image}
              alt={member.name}
              width={600} // Increased width
              height={600} // Increased height
              className={styles.teamImage}
            />
            <div className={styles.memberName3D}>{member.name}</div>
            <p className={styles.memberTitle}>{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
