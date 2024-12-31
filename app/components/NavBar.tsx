"use client"; 

import { useState } from 'react'; // Import useState hook
import Link from 'next/link';
import ServiceDropdown from './serviceDropdown';
import CompanyDropdown from './companyDropdown';
import styles from './NavBarStyles.module.css';
import Image from 'next/image';

const Navbar = () => {
  const [showImage, setShowImage] = useState(false); // State to control image visibility

  const handleButtonClick = () => {
    setShowImage(!showImage); // Toggle image visibility on button click
  };

  const handleCloseModal = () => {
    setShowImage(false); // Close the modal
  };

  return (
    <>
      <nav className={styles.navbar}>
        <Image 
          src="/godantown log.webp"
          alt="Company Logo"
          width={200}
          height={200}
        />
        <ul className={styles.navMenu}>
          <li>
            <ServiceDropdown />
          </li>
          <li>
            <CompanyDropdown />
          </li>
          <li>
            <Link href="/airtime">Our Blog</Link>
          </li>
          <li>
            <Link href="/virtual-card">Become an Ambassador</Link>
          </li>
          <li className={styles.downloadButtonContainer}>
            <button 
              className={styles.downloadButton}
              onClick={handleButtonClick} // Add click handler
            >
              Scan to Download App
            </button>
          </li>
        </ul>
      </nav>

      {showImage && ( // Conditionally render the modal
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <Image 
              src="/scanToDownload.png" // Path to the image in the public folder
              alt="Scan to Download"
              width={400}
              height={400}
            />
            <button className={styles.closeButton} onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
