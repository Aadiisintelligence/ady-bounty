import React from 'react'
import Image from 'next/image'
import blackjack_bg from '@/public/Blackjack.jpg'
import roulette_bg from '@/public/roulette.jpg'
import poker_bg from '@/public/poker.jpg'
import slot_bg from '@/public/slot.jpg'

export default function CTA() {
  const games = [
    { name: 'Blackjack', image: blackjack_bg },
    { name: 'Roulette', image: roulette_bg },
    { name: 'Poker', image: poker_bg },
    { name: 'Slots', image: slot_bg },
  ]

  return (
    <section className="bg-base-100 relative">
      <div className="relative mx-auto max-w-7xl px-8 py-24 text-center text-slate-800 md:py-48">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center text-center">
          <h2 className="mb-8 text-4xl font-black tracking-tight md:mb-12 md:text-5xl">
            Popular Casino Games
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
            {games.map((game, index) => (
              <div
                key={index}
                className="rounded-lg shadow-lg overflow-hidden bg-white"
              >
                <Image
                  src={game.image}
                  alt={game.name}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 bg-[#1e293b]">
                  <h3 className="text-lg font-bold text-white">{game.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
