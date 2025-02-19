import Image from 'next/image'
import Link from 'next/link'

import bountyLogo from '@/public/bounty_logo.jpeg'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="px-8 py-24 mx-auto max-w-7xl">
        <div className="flex flex-col flex-wrap md:flex-row md:flex-nowrap lg:items-start">
          <div className="flex-shrink-0 mx-auto w-64 text-center md:mx-0 md:text-left">
            <Link
              href="/"
              aria-current="page"
              className="flex gap-2 justify-center items-center md:justify-start"
            >
              <Image
                src={bountyLogo}
                alt="Bounty Game Background"
                layout="contain"
                objectFit="cover"
                priority
                width={58}
                height={58}
                style={{ borderRadius: '4px' }}
              />
              <strong className="text-base font-extrabold tracking-tight text-slate-800 md:text-lg">
                Bounty Game
              </strong>
            </Link>
            <p className="mt-3 text-sm text-slate-700">
              Compete in exciting challenges, complete missions, and earn real
              rewards on Bounty Game.
            </p>
            <p className="mt-3 text-sm text-slate-700">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>
          <div className="flex flex-wrap flex-grow justify-center mt-10 -mb-10 text-center md:mt-0 md:pl-24">
            <div className="px-4 w-full md:w-1/2 lg:w-1/3">
              <div className="mb-3 text-sm font-semibold tracking-widest footer-title text-slate-900 md:text-left">
                LINKS
              </div>
              <div className="flex flex-col gap-2 justify-center items-center mb-10 text-sm text-slate-700 hover:text-slate-900 md:items-start">
                <Link href="/contact" className="link link-hover">
                  Contact Us
                </Link>
                <Link
                  href="https://t.me/+zr5uFP_SGRU2MzFh"
                  className="link link-hover"
                >
                  Telegram Channel
                </Link>
              </div>
            </div>
            <div className="px-4 w-full md:w-1/2 lg:w-1/3">
              <div className="mb-3 text-sm font-semibold tracking-widest footer-title text-slate-900 md:text-left">
                LEGAL
              </div>
              <div className="flex flex-col gap-2 justify-center items-center mb-10 text-sm text-slate-700 hover:text-slate-900 md:items-start">
                <Link href="/disclaimer" className="link link-hover">
                  Disclaimer
                </Link>
                <Link href="/tos" className="link link-hover">
                  Terms of services
                </Link>
                <Link href="/privacy-policy" className="link link-hover">
                  Privacy policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
