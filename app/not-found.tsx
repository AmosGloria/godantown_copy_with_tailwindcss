import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/NavBar";
import styles from "./not-found.module.css";

const NotFound = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className={styles.container}>
        <h1 className={styles.heading}>Feeling Lost? Let&apos;s take you home</h1>
        <Image
          src="/404.png"
          alt="404 illustration"
          className={styles.image}
          width={300}
          height={200}
        />
        <Link href="/" className={styles.link}>
          Go home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
