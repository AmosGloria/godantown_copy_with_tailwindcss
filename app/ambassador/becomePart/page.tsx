import Image from 'next/image';
import styles from './BecomePart.module.css';


export default function BecomePart() {
  return (
    <div className={styles.container}>
      {/* Left Side */}
      <div className={styles.leftSide}>
        <Image src="/becomePart.png" alt="Become Part" width={350} height={350} />
      </div>

      {/* Right Side */}
      <div className={styles.rightSide}>
        <h1 className={styles.heading}>Become Part Of Us</h1>
        <p className={styles.paragraph}>
          Are you an enthusiastic young student in the university yearning to be thrown into the deep end of a fast-moving, dynamic, and social work environment?
        </p>
        <p className={styles.paragraph}>
          Are you looking for an opportunity to turn your influence to impact and income?
        </p>
        <p className={styles.paragraph}>
          Are you intentional about building professional credibility through building your work experience with a fast-growing tech company?
        </p>
        <p className={styles.paragraph}>
          If this is you, then this opportunity is for you.
        </p>
      </div>
    </div>
  );
}
