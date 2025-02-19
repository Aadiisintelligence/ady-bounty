'use client'

import React from 'react'

export default function About() {
  return (
    <section className="bg-slate-50" id="faq">
      <div className="mx-auto max-w-7xl px-8 py-24">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="flex flex-1 flex-col text-left">
            <p className="mb-4 inline-block font-bold text-[#ef3332] text-[32px]">
              About Us
            </p>
            <p className="text-[14px]  text-slate-800 md:text-[18px]">
              Welcome to <strong>Bounty Game</strong>, where strategy, skill,
              and high-stakes action come together in an immersive gaming
              experience. Our platform is designed for players who crave
              excitement, competition, and real rewards. Whether you’re a casual
              gamer or a seasoned competitor, Bounty Game offers dynamic
              challenges, intense battles, and the opportunity to showcase your
              skills. At <strong>Bounty Game</strong>, we believe in fair play,
              strategic depth, and rewarding the best players. With innovative
              game mechanics, thrilling missions, and a community of passionate
              gamers, we’re redefining the way you compete. Take on bounties,
              outsmart your rivals, and rise to the top—because in this game,
              every move counts. Join the hunt. Claim your rewards. Become a
              legend in Bounty Game.
            </p>
          </div>
          {/* <div className="h-[500px] flex-1">ds</div> */}
        </div>
      </div>
    </section>
  )
}
