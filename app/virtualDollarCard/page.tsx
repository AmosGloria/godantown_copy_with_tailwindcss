import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/footer/page";
import BestVirtualCard from "./bestVirtualCard/page";
import CheapestVirtualDollarCard from "./cheapestVirtualDollarCard/page";
import StressFreeSide from "./stressFreeSide/page";
import SoMuchEase from "./soMuch/page";
import Shopping from "./shopping/page";
import styles from "./VirtualDollarCard.module.css";

// Metadata override for this page
export const metadata = {
  title: "Get a Secure and Cheap Virtual Dollar Card in Nigeria",
  description:
    "Create a virtual dollar card for just $1 with zero funding fees. No transaction limits. Accepted everywhere, anytime, securely.",
  icons: {
    icon: "/godantownLogo.png", // Path to the logo in the public directory
  },
};

export default function virtualDollarCard() {
  return (
    <>
      {/* Navbar Section */}
      <div className={styles.navBarContainer}>
        <NavBar />
      </div>

      {/* Main Content Section */}
      <div className={styles.container}>
        <div className={styles.mainContent}>
          {/* Left Section */}
          <div className={styles.leftSection}>
            <div className={styles.wrapper}>
              <h2 className={styles.header}>PAY SMARTER, PAY FASTER</h2>
            </div>
            <h1 className={styles.title}>
              For just $1 create your virtual dollar card with{" "}
              <span className={styles.text}>zero funding fees.</span>
            </h1>
            <p className={styles.description}>
              No transaction limit. Get the cheapest, most secure dollar virtual
              card in Nigeria - works everywhere, every time, almost for free.
            </p>

            {/* Buttons Section */}
            <div className={styles.buttonsContainer}>
              <Link
                href="/app/download/page.tsx"
                className={styles.downloadButton}
              >
                Download App
              </Link>
              <Link
                href="/app/download/page.tsx"
                className={styles.getStartedButton}
              >
                Get Started
              </Link>
            </div>

            {/* Accepted Everywhere Section */}
            <div className={styles.acceptedSection}>
              <p className={styles.acceptedText}>Accepted everywhere on</p>
              <Image
                src="/masterCard.png"
                alt="MasterCard"
                width={100}
                height={5}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        <Image
          src="/createVirtualCard.png"
          alt="Create Virtual Card"
          width={500}
          height={350}
        />
      </div>
      <BestVirtualCard />
      <CheapestVirtualDollarCard/>
      <StressFreeSide/>
      <SoMuchEase/>
      <Shopping/>
      <Footer />
    </>
  );
}
