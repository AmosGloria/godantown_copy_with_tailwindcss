"use client";

import React from 'react';
import Image from 'next/image';
import styles from './Questions.module.css';

const Faq = () => {
  return (
    <div className={styles.container}>
      {/* Title Section */}
      <h1 className={styles.title}>Frequently Asked Questions about Dantown <span className={styles.head2}>Virtual Dollar Card</span> </h1>
      <p className={styles.subtitle}>Here are some frequently asked questions to guide you in <span className={styles.head2}></span> using our dollar virtual card.</p>

      <div className={styles.faqRow}>
        {/* FAQ Section 1 */}
        <div className={styles.faqItem}>
          <Image src="/v.d.cQuestion.png" alt="Question" width={100} height={100} className={styles.image} />
          <p className={styles.questionTitle}>Question</p>
          <h2 className={styles.question}>How can I create a virtual dollar card in Nigeria?</h2>
          <p className={styles.answerTitle}>Answer</p>
          <p className={styles.answer}>Follow these simple steps:</p>
          <ul className={styles.olStyled}>
            <li>Download the Dantown Mobile app.</li>
            <li>Sign up and verify your account.</li>
            <li>Create & personalize your card.</li>
          </ul>
        </div>

        {/* FAQ Section 2 */}
        <div className={styles.faqItem}>
          <Image src="/feesQuestion.png" alt="Fees Question" width={100} height={100} className={styles.image} />
          <p className={styles.questionTitle}>Question</p>
          <h2 className={styles.question}>What fees are associated with creating and using Dantown dollar card?</h2>
          <p className={styles.answerTitle}>Answer</p>
          <p className={styles.answer}>No hidden charges with Dantown</p>
          <ul className={styles.olStyled}>
            <li>Card creation fee: $1.00</li>
            <li>Funding fee: $0</li>
          </ul>
        </div>

        {/* FAQ Section 3 */}
        <div className={styles.faqItem}>
          <Image src="/blockingQuestion.png" alt="Blocking Question" width={100} height={100} className={styles.image} />
          <p className={styles.questionTitle}>Question</p>
          <h2 className={styles.question}>What happens if I block my virtual card?</h2>
          <p className={styles.answerTitle}>Answer</p>
          <p className={styles.answer}>When a virtual card is blocked, all functionalities are disabled. You can block your card as many times as needed within a day.</p>
        </div>

        {/* FAQ Section 4 */}
        <div className={styles.faqItem}>
          <Image src="/transactQuestion.png" alt="Transaction Question" width={100} height={100} className={styles.image} />
          <p className={styles.questionTitle}>Question</p>
          <h2 className={styles.question}>How can I transact with my virtual card?</h2>
          <p className={styles.answerTitle}>Answer</p>
          <p className={styles.answer}>All details—card name, card number, expiry date, and CVC number are provided on the card for your online transactions.</p>
        </div>

        {/* FAQ Section 5 */}
        <div className={styles.faqItem}>
          <Image src="/compatibilityQuestion.png" alt="Compatibility Question" width={100} height={100} className={styles.image} />
          <p className={styles.questionTitle}>Question</p>
          <h2 className={styles.question}>Is the virtual card compatible with all devices?</h2>
          <p className={styles.answerTitle}>Answer</p>
          <p className={styles.answer}>Currently, the virtual card has been tested and is compatible with various Android and iOS devices.</p>
        </div>

        {/* FAQ Section 6 */}
        <div className={styles.faqItem}>
          <Image src="/internationalQuestion.png" alt="International Transactions Question" width={100} height={100} className={styles.image} />
          <p className={styles.questionTitle}>Question</p>
          <h2 className={styles.question}>Can I use my virtual card for international transactions?</h2>
          <p className={styles.answerTitle}>Answer</p>
          <p className={styles.answer}>Yes, you can use your card for international transactions. Note that there are specific transaction fees and conversion fees applicable.</p>
        </div>

        {/* FAQ Section 7 */}
        <div className={styles.faqItem}>
          <Image src="/notificationsQuestions.png" alt="Notifications Question" width={100} height={100} className={styles.image} />
          <p className={styles.questionTitle}>Question</p>
          <h2 className={styles.question}>Will I receive notifications for my card transactions?</h2>
          <p className={styles.answerTitle}>Answer</p>
          <p className={styles.answer}>Yes, you will receive notifications via emails, transaction history logs, and push notifications for all transactions and card management activities.</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
