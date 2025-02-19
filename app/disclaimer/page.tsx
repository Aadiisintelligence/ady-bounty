'use client'

import React from 'react'

export default function Disclaimer() {
  return (
    <section className="bg-slate-50" id="faq">
      <div className="mx-auto max-w-7xl px-8 py-24">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="flex flex-1 flex-col text-left">
            <p className="mb-4 inline-block font-bold text-[#ef3332] text-[32px]">
              Disclaimer
            </p>
            <p className="text-[14px]  text-slate-800 md:text-[18px]">
              <strong> Legal Disclaimer : </strong> Bounty Game is a skill-based
              gaming platform intended for entertainment purposes only.
              Participation in our platform does not constitute gambling, and we
              do not offer real-money betting services. Users are responsible
              for ensuring that their participation complies with the laws and
              regulations of their respective jurisdictions. Bounty Game is not
              liable for any legal consequences arising from the use of our
              platform. <br />
              <strong> Responsible Gambling : </strong> At Bounty Game, we
              promote responsible gaming and encourage players to engage in fair
              play. We advise users to set limits on their playtime and
              spending, ensuring that gaming remains a fun and controlled
              activity. If you or someone you know is experiencing compulsive
              gaming behavior, we encourage seeking professional help and
              utilizing responsible gaming resources. <br />
              <strong> Age Restriction : </strong> Bounty Game is strictly
              available to individuals who meet the minimum age requirement as
              per their local laws. Users under the legal age for gaming in
              their jurisdiction are prohibited from participating. By
              registering on our platform, users confirm that they meet the
              legal age requirements. <br />
              <strong> No Guarantees : </strong> Bounty Game does not guarantee
              winnings, rewards, or financial gains. All outcomes depend on
              skill, strategy, and competition. Past performance does not
              indicate future success, and users should play with an
              understanding that rewards are not guaranteed. <br />
              <strong> Legal Compliance : </strong> It is the sole
              responsibility of the user to comply with local, state, and
              national laws regarding online gaming. Bounty Game does not take
              responsibility for any violation of laws by its users. We reserve
              the right to suspend or terminate accounts that do not adhere to
              our terms of service or legal requirements. By using Bounty Game,
              you acknowledge and agree to these terms. If you do not accept
              these conditions, please refrain from using the platform.
            </p>
          </div>
          {/* <div className="h-[500px] flex-1">ds</div> */}
        </div>
      </div>
    </section>
  )
}
