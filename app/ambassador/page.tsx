import Image from 'next/image';
import Link from 'next/link';
import styles from './Ambassador.module.css';
import BecomePart from './becomePart/page';
import WhoAreWeLookingFor from './keyTraits/page';
import WhatDoYouStandToGain from './whatYouStandToGain/page';
import MissOut from './missOut/page';
import Navbar from '../components/NavBar';
import Footer from '../components/footer/page';

export default function AmbassadorPage() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        {/* Left Side */}
        <div className={styles.leftSide}>
          <h1 className={styles.heading}>
            Welcome to Dantown&apos;s Campus<span className={styles.highlight}> Ambassador</span> Program
          </h1>
          <p className={styles.paragraph}>
            Leverage your reach and influence on your campus to earn passive
            <span className={styles.secondPart}>
            income for life and win cool monthly prizes.
            </span>
          </p>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSelIxU_41SleXbwEqRx8sJCnvRNiyhwhh1ansirNR6phvBFpA/viewform"
          >
            <button className={styles.applyButton}>
              Apply Here <span>&#8594;</span>
            </button>
          </Link>
          <div className={styles.hara}>
            <Image src="/hara.png" alt="hara" width={180} height={80} />
          </div>
        </div>

        {/* Right Side */}
        <div className={styles.rightSide}>
          <Image src="/campusGadgets.png" alt="Campus Gadgets" width={600} height={400}  className={styles.firstImage}/>
          <Image src="/campusAmbassador.png" alt="Campus Ambassador" width={600} height={400} />
        </div>
      </div>
      <BecomePart/>
      <WhoAreWeLookingFor/>
      <WhatDoYouStandToGain/>
      <MissOut/>
      <Footer />
    </div>
  );
}
