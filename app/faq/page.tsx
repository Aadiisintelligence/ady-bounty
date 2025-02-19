'use client'

import React, { useState } from 'react'

const faqData = [
  {
    question: 'What is Bounty Game?',
    answer: (
      <p>
        Bounty Game is an exciting gaming platform where players can compete in
        challenges, complete missions, and earn real rewards. Our goal is to
        create a thrilling experience where skill, strategy, and competition
        come together.
      </p>
    ),
  },
  {
    question: 'How do I participate in bounty challenges?',
    answer:
      'Simply sign up, browse the available bounty challenges, and complete the required tasks to earn rewards.',
  },
  {
    question: 'Are there any entry fees to join challenges?',
    answer:
      'Some challenges are free to enter, while others may require an entry fee. The details will be mentioned in each bounty listing.',
  },
  {
    question: 'What kind of rewards can I earn?',
    answer:
      'Players can earn real cash, in-game items, exclusive skins, and other digital rewards by completing challenges successfully.',
  },
  {
    question: 'How do I withdraw my winnings?',
    answer:
      'You can withdraw your winnings through various payment methods, including bank transfers, PayPal, or cryptocurrency, depending on the platform’s policies.',
  },
  {
    question: 'Is Bounty Game safe and secure?',
    answer:
      'Yes! We ensure player security through encrypted transactions, fair gameplay policies, and strict anti-cheating measures.',
  },
  {
    question: 'Can I create my own bounty challenges?',
    answer:
      'Yes! Players and sponsors can create custom bounty challenges, set their own rules, and offer rewards for completion.',
  },
  {
    question: 'What platforms is Bounty Game available on?',
    answer:
      'Bounty Game is available on PC, iOS, and Android, allowing players to compete from any device.',
  },
]

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string
  answer: React.ReactNode
  isOpen: boolean
  onClick: () => void
}) => {
  return (
    <li>
      <button
        className="relative flex w-full items-center gap-2 border-t border-slate-200 py-5 text-left text-base font-semibold md:text-lg"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="flex-1 text-slate-800">{question}</span>
        <svg
          className={`ml-auto h-4 w-4 flex-shrink-0 fill-current transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 12L2 6h12l-6 6z" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-5 leading-relaxed text-slate-600">
          {typeof answer === 'string' ? <p>{answer}</p> : answer}
        </div>
      </div>
    </li>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-slate-50" id="faq">
      <div className="mx-auto max-w-7xl px-8 py-24">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="flex basis-1/2 flex-col text-left">
            <p className="mb-4 inline-block font-bold text-[#ef3332] text-[32px]">
              FAQ
            </p>
            <p className="text-3xl font-extrabold text-slate-800 md:text-4xl">
              Frequently Asked Questions
            </p>
          </div>
          <ul className="basis-1/2">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
