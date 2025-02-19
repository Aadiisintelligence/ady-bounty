import Image from 'next/image'
import { Button } from './button'
import bountyBg from '@/public/bounty_bg.jpeg'

function Hero() {
  return (
    <div>
      <div className="relative w-full flex justify-center">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center blur-xl opacity-[0.8]"
          style={{ backgroundImage: `url(${bountyBg.src})` }}
        ></div>
        <div className="z-10">
          <Image
            src={bountyBg}
            alt="Bounty Game Background"
            layout="contain"
            objectFit="cover"
            priority
          />
        </div>
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-8 py-12 pt-4 lg:px-12 lg:py-14">
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button
            href={'https://bountygame.in/#/login'}
            className="h-10 w-36 rounded-md sm:h-12 sm:w-48"
            style={{ background: '#ef3332' }}
          >
            Login
          </Button>
          <Button
            href={
              'https://bountygame.in/#/register?invitationCode=532863012356'
            }
            className="h-10 w-36 rounded-md sm:h-12 sm:w-48"
            style={{ background: '#ef3332' }}
          >
            Register
          </Button>
        </div>
        <div className="mx-auto mb-8 max-w-3xl py-8 sm:py-8 lg:py-8">
          <div className="hidden sm:flex sm:justify-center"></div>
          <div className="mt-2 text-center">
            <h1 className="text-4xl font-black tracking-tight text-slate-800 sm:text-6xl">
              Welcome to Bounty Game
            </h1>
            <p className="mt-6 text-base font-light leading-8 text-secondary-foreground text-slate-500 sm:text-lg">
              Take on thrilling missions, outsmart opponents, and claim your
              rewards in
              <br /> Bounty Game.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
