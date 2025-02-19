'use client'

import React from 'react'

export default function Privacy() {
  return (
    <section className="bg-slate-50" id="faq">
      <div className="mx-auto max-w-7xl px-8 py-24">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="flex flex-1 flex-col text-left">
            <p className="mb-4 inline-block font-bold text-[#ef3332] text-[32px]">
              Privacy Policy
            </p>
            <div className="text-slate-800 text-[14px] md:text-[18px] space-y-6">
              <div>
                <strong>1. Information We Collect</strong>
                <p className="text-[16px]">
                  We may collect the following types of information when you use
                  the Game: <br />
                  a. Personal Information Account Information: If you create an
                  account, we may collect your username, email address, and
                  password. Profile Information: Your in-game profile, including
                  avatar, nickname, and progress. <br />
                  b. Gameplay Information Game Data: Information about your
                  gameplay, such as scores, achievements, and in-game purchases.
                  Device Information: Device type, operating system, unique
                  device identifiers, and IP address. Log Data: Information
                  about your use of the Game, including timestamps, actions
                  taken, and interactions with other players. <br />
                  c. Payment Information If you make in-game purchases, we may
                  collect payment information (e.g., credit card details)
                  through secure third-party payment processors. We do not store
                  your payment information on our servers. <br />
                  d. Third-Party Information If you log in using a third-party
                  service (e.g., Google Play, Apple Game Center), we may collect
                  information from that service, such as your username and
                  profile picture.
                </p>
              </div>

              <div>
                <strong>2. How We Use Your Information</strong>
                <p className="text-[16px]">
                  We use the information we collect for the following purposes:{' '}
                  <br />
                  To provide, maintain, and improve the Game. To personalize
                  your gaming experience. <br />
                  To process in-game purchases and transactions. <br />
                  To communicate with you about updates, promotions, and
                  support. <br />
                  To monitor and analyze usage and trends to improve the Game.{' '}
                  <br />
                  To enforce our terms of service and prevent fraud or abuse.
                </p>
              </div>

              <div>
                <strong>3. Sharing Your Information</strong>
                <p className="text-[16px]">
                  We may share your information in the following circumstances:
                  With Service Providers: We may share information with
                  third-party service providers who assist us in operating the
                  Game (e.g., hosting, analytics, payment processing). For Legal
                  Reasons: We may disclose information if required by law or to
                  protect our rights, property, or safety. With Your Consent: We
                  may share information with third parties if you give us
                  explicit consent.
                </p>
              </div>

              <div>
                <strong>4. Data Security</strong>
                <p className="text-[16px]">
                  We take reasonable measures to protect your information from
                  unauthorized access, alteration, or destruction. However, no
                  method of transmission over the internet or electronic storage
                  is 100% secure.
                </p>
              </div>

              <div>
                <strong>5. Children’s Privacy</strong>
                <p className="text-[16px]">
                  The Game is not intended for children under the age of 18. We
                  do not knowingly collect personal information from children
                  under 18. If we become aware that we have collected such
                  information, we will take steps to delete it.
                </p>
              </div>

              <div>
                <strong>6. International Transfers</strong>
                <p className="text-[16px]">
                  Your information may be transferred to and processed in
                  countries other than your own. These countries may have
                  different data protection laws than your jurisdiction.
                </p>
              </div>

              <div>
                <strong>7. Changes to This Privacy Policy</strong>
                <p className="text-[16px]">
                  We may update this Privacy Policy from time to time. If we
                  make material changes, we will notify you by email or through
                  the Game. Your continued use of the Game after such changes
                  constitutes your acceptance of the updated Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
