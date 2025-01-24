import Image from 'next/image';
import styles from './keyTraits.module.css';

export default function WhoAreWeLookingFor() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Who are we looking for?</h1>
      <p className={styles.description}>
        We are looking for entrepreneurial and innovative students who can push the Dantown brand in their campuses. They will be our student brand influencers and will earn income through our loyalty program and also monthly prizes.
      </p>
      <h2 className={styles.subtitle}>KEY TRAITS NEEDED</h2>
      <div className={styles.traitsContainer}>
        {/* Influential */}
        <div className={styles.traitCard}>
          <div className={styles.traitHeader}>
            <Image src="/keyTraits.png" alt="Influential" width={50} height={50} />
            <h2 className={styles.traitTitle}>Influential</h2>
          </div>
          <p className={styles.traitDescription}>
            You can influence your tribe of friends and others to become Dantown customers.
          </p>
        </div>
        {/* Innovative */}
        <div className={styles.traitCard}>
          <div className={styles.traitHeader}>
            <Image src="/keyTraits.png" alt="Innovative" width={50} height={50} />
            <h2 className={styles.traitTitle}>Innovative</h2>
          </div>
          <p className={styles.traitDescription}>
            You can sell and represent the company&apos;s brand through innovative ways.
          </p>
        </div>
        {/* Enthusiastic */}
        <div className={styles.traitCard}>
          <div className={styles.traitHeader}>
            <Image src="/keyTraits.png" alt="Enthusiastic" width={50} height={50} />
            <h2 className={styles.traitTitle}>Enthusiastic</h2>
          </div>
          <p className={styles.traitDescription}>
            You are self-driven, energetic, and a positive person.
          </p>
        </div>
      </div>
    </div>
  );
}
