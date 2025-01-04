"use client";

import { useState } from "react";
import Link from "next/link";
import ServiceDropdown from "./serviceDropdown";
import CompanyDropdown from "./companyDropdown";
import styles from "./NavBarStyles.module.css";
import Image from "next/image";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // Track the open dropdown

  const handleCloseDropdown = () => {
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  return (
    <>
      <nav className={styles.navbar} onClick={handleCloseDropdown}>
        <Image
          src="/godantown log.webp"
          alt="Company Logo"
          width={200}
          height={200}
        />
        <ul className={styles.navMenu}>
          <li>
            <ServiceDropdown
              isOpen={openDropdown === "service"}
              toggleDropdown={() => toggleDropdown("service")}
              closeDropdown={handleCloseDropdown}
            />
          </li>
          <li>
            <CompanyDropdown
              isOpen={openDropdown === "company"}
              toggleDropdown={() => toggleDropdown("company")}
              closeDropdown={handleCloseDropdown}
            />
          </li>
          <li>
            <Link href="/airtime">Our Blog</Link>
          </li>
          <li>
            <Link href="/virtual-card">Become an Ambassador</Link>
          </li>
          <li className={styles.downloadButtonContainer}>
            <button className={styles.downloadButton}>Scan to Download App</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
