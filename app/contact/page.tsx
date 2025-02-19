'use client'

import React from 'react'

export default function Contact() {
  return (
    <section className="bg-slate-50" id="faq">
      <div className="mx-auto max-w-7xl px-8 py-24">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="flex flex-1 flex-col text-left">
            <p className="mb-4 inline-block font-bold text-[#ef3332] text-[32px]">
              Contact Us
            </p>
            <p className="text-[14px]  text-slate-800 md:text-[18px]">
              We’re here to help! Whether you have questions, need support, or
              want to provide feedback, feel free to reach out to us. Our team
              is dedicated to ensuring the best experience for our players.{' '}
              <br />
              <strong> Customer Support : </strong> 📧 Email:
              support@bountygame.in <br />
              <strong>Business & Partnership Inquiries : </strong> Interested in
              collaborating with us? Whether you’re a gaming influencer, brand,
              or business, we’d love to hear from you. 📧 Business Inquiries:
              business@bountygame.in <br />
              <strong> Responsible Gaming Support : </strong> We promote
              responsible gaming and encourage players to seek help if they
              experience any gaming-related issues. 📧 Responsible Gaming
              Support: responsiblegaming@bountygame.in <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
