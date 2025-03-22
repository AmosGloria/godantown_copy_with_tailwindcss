"use client";

import React from "react";
import Image from "next/image";

const Faq = () => {
  return (
    <div className="flex flex-col items-start text-left mx-[6%] my-[2%] p-4 max-w-full overflow-x-auto mb-[5%] pb-[5%]">
      {/* Title Section */}
      <h1 className="text-[2.2rem] md:text-[3rem] font-bold mb-6 leading-none px-[4%] mt-16 sm:mt-20 text-center sm:text-left">
        Frequently Asked Questions about Dantown
        <span className="block text-center"> Virtual Dollar Card</span>
      </h1>
      <p className="text-[1.2rem] md:text-[1.5rem] text-gray-600 mb-10 px-[5%] md:px-[20%]">
        Here are some frequently asked questions to guide you in using 
        <span className="block text-center">our dollar virtual card.</span>
      </p>

      <div className="flex flex-wrap justify-center gap-8 w-full md:w-max md:flex-nowrap overflow-x-auto p-4">
        {/* FAQ Items */}
        {[{
          img: "/v.d.cQuestion.png",
          question: "How can I create a virtual dollar card in Nigeria?",
          answer: "Follow these simple steps:",
          list: ["Download the Dantown Mobile app.", "Sign up and verify your account.", "Create & personalize your card."]
        },
        {
          img: "/feesQuestion.png",
          question: "What fees are associated with creating and using Dantown dollar card?",
          answer: "No hidden charges with Dantown",
          list: ["Card creation fee: $1.00", "Funding fee: $0"]
        },
        {
          img: "/blockingQuestion.png",
          question: "What happens if I block my virtual card?",
          answer: "When a virtual card is blocked, all functionalities are disabled. You can block your card as many times as needed within a day."
        },
        {
          img: "/transactQuestion.png",
          question: "How can I transact with my virtual card?",
          answer: "All details—card name, card number, expiry date, and CVC number are provided on the card for your online transactions."
        },
        {
          img: "/compatibilityQuestion.png",
          question: "Is the virtual card compatible with all devices?",
          answer: "Currently, the virtual card has been tested and is compatible with various Android and iOS devices."
        },
        {
          img: "/internationalQuestion.png",
          question: "Can I use my virtual card for international transactions?",
          answer: "Yes, you can use your card for international transactions. Note that there are specific transaction fees and conversion fees applicable."
        },
        {
          img: "/notificationsQuestions.png",
          question: "Will I receive notifications for my card transactions?",
          answer: "Yes, you will receive notifications via emails, transaction history logs, and push notifications for all transactions and card management activities."
        }
        ].map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-[1.5rem] w-full md:w-[530px] h-auto md:h-[650px] text-left flex flex-col items-stretch overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-lg"
          >
            {/* Image */}
            <Image src={faq.img} alt="FAQ Question" width={100} height={100} className="w-full h-[200px] md:h-[250px] object-cover rounded-t-[1.5rem]" />

            {/* Question & Answer */}
            <p className="font-bold underline text-[1rem] md:text-[1.2rem] m-4">Question</p>
            <h2 className="text-[1.1rem] md:text-[1.3rem] font-semibold px-4">{faq.question}</h2>

            <p className="font-bold underline text-[1rem] md:text-[1.2rem] m-4">Answer</p>
            <p className="text-[1rem] md:text-[1.2rem] text-gray-600 px-4 leading-[2]">{faq.answer}</p>

            {/* Ordered List */}
            {faq.list && (
              <ul className="pl-6 md:pl-8 text-gray-600 list-disc leading-[3] text-[1rem] md:text-[1.2rem]">
                {faq.list.map((item, i) => (
                  <li key={i} className="ml-2 md:ml-4">{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
