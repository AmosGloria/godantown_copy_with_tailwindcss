// components/WhyChooseDantown.tsx
import Image from 'next/image';
import styles from './WhyChooseDantown.module.css'; // Ensure you create and import your CSS module

const WhyChooseDantown = () => {
  return (
    <div className={styles.whyChooseSection}>
      {/* Heading Section */}
      <div className={styles.heading}>
        <h1>Why</h1>
        <h1>Choose</h1>
        <h1>Dantown</h1>
      </div>

      {/* First Section */}
      <div className={styles.firstSection}>
        <Image src="/ease.png" alt="Ease" width={150} height={150} className={styles.firstSectionImage} />
        <div className={styles.textBlock}>
          <h3>Ease in setting up your account. Or Set up your account faster than pronouncing &ldquo;Jack&rdquo;</h3>
          <p>
            A core part of our existence is customer convenience. You don’t have to
            spend hours setting up an account. Within three minutes from the
            comfort of your phone or PC, you can easily set up your account.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className={styles.section}>
        <Image src="/noHiddenFees.png" alt="No Hidden Fees" width={150} height={150} className={styles.sectionImage} />
        <div className={styles.textBlock}>
          <h3>No hidden fees.</h3>
          <p>
            Integrity is at the core of our existence. Our rates are arguably <span className={styles.cut}>the
            best in the country, and what we tell you is what you get.</span> No hidden
            fees.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className={styles.section}>
        <Image src="/noMaintenanceFees.png" alt="No Maintenance Fees" width={150} height={150} className={`${styles.thirdSectionImage} ${styles.rightAligned}`} />
        <div className={styles.textBlock}>
          <h3>No maintenance fees.</h3>
          <p>We don’t charge you any token for the maintenance of your naira wallet.</p>
        </div>
      </div>

      {/* Section 4 */}
      <div className={styles.section}>
        <Image src="/excellentService.png" alt="Excellent Service" width={150} height={150} className={styles.sectionImage} />
        <div className={styles.textBlock}>
          <h3>Excellent service delivery.</h3>
          <p>Our services are tailored to give you the best experience in the industry.</p>
          <ul className={styles.squareBullets}>
            <li>Bank account</li>
            <li>Discounted airtime</li>
          </ul>
          <ul className={styles.secondSquareBullets}>
            <li>Bank transfer</li>
            <li>Debit mastercards (coming soon)</li>
          </ul>
        </div>
      </div>

      {/* Section 5 */}
      <div className={styles.section}>
        <Image src="/fastPayment.png" alt="Fast Payment" width={150} height={150} className={`${styles.sectionImage} ${styles.rightAligned}`} />
        <div className={styles.textBlock}>
          <h3>Fast Payment.</h3>
          <p>
            You really don’t have to wait for hours before being paid when you
            transact with us. You get paid in minutes whenever you transact with
            us, irrespective of the time of the day.
          </p>
        </div>
      </div>

      {/* Section 6 */}
      <div className={styles.section}>
        <Image src="/excellentCustomerService.png" alt="Excellent Customer Service" width={150} height={150} className={styles.sectionImage} />
        <div className={styles.textBlock}>
          <h3>Excellent customer service.</h3>
          <p>
            &quot;We don’t just say we treat our customers like royalties for the sake
            of saying it. At Dantown, our customer care unit is called
            &ldquo;Customer Happiness Unit,&rdquo; with an emphasis on happiness because our
            joy is seeing customers happy.&quot;
          </p>
          <p>
            And YES! our customer happy staff response is faster than debit alerts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseDantown;
