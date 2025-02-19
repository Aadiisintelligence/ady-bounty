'use client'
export default function Pricing() {
  return (
    <section className="overflow-hidden bg-slate-50" id="pricing">
      <div className="mx-auto max-w-5xl px-8 py-24">
        <div className="mb-20 flex w-full flex-col text-center">
          <h2 className="mx-auto mb-8 max-w-xl text-3xl font-bold tracking-tight text-slate-800 lg:text-5xl">
            Bounty Game Information
          </h2>
          <div className="mx-auto max-w-md font-medium text-slate-500">
            Dominate the battlefield, conquer challenges, and claim epic rewards
            in Bounty Game!
          </div>
        </div>
        <div className="relative flex flex-col items-stretch justify-center gap-8 lg:flex-row">
          <PricingCard
            key="Free Plan"
            // title="Free Plan"
            // isFeatured={false}
            // price={0}
            // originalPrice={0}
            // features={[
            //   <span key="feature1">50 AI-generated lesson plans</span>,
            //   <span key="feature2">Basic customization options</span>,
            //   <span key="feature3">Email support</span>,
            // ]}
            // buttonLink="/sign-up"
            // description="Perfect for trying out QuillMinds"
          />
          {/* <PricingCard
            key="Pro Plan"
            title="Pro Plan"
            isFeatured={true}
            price={19.99}
            originalPrice={30}
            features={[
              <span key="feature1">Unlimited AI-generated lesson plans</span>,
              <span key="feature2">Advanced customization options</span>,
              <span key="feature3">Priority support</span>,
              <span key="feature4">Collaboration tools</span>,
              <span key="feature5">Premium templates</span>,
            ]}
            buttonLink="/sign-up?priceId=pro-plan"
            description="For educators who want the full QuillMinds experience"
          /> */}
        </div>
        {/* <TestimonialSingle
          testimonial={{
            name: 'Sarah Johnson',
            content:
              'QuillMinds has revolutionized my lesson planning. I save hours each week and my students love the engaging content!',
            schoolName: 'Oakridge Elementary',
            image: 'https://api.dicebear.com/6.x/avataaars/svg?seed=Sarah',
          }}
        /> */}
      </div>
    </section>
  )
}

function PricingCard({
  // title,
  // price,
  // originalPrice,
  // features,
  // buttonLink,
  isFeatured,
}: // description,
{
  // title: string
  // price: number
  // originalPrice: number
  // features: React.ReactNode[]
  // buttonLink: string
  isFeatured?: boolean
  // description: string
}) {
  return (
    <div
      className={`relative w-full max-w-full ${isFeatured ? 'lg:-mt-4' : ''}`}
    >
      <div
        className={`relative z-10 h-full rounded-lg ${
          isFeatured ? 'ring-2 ring-blue-500' : 'border border-zinc-200'
        }`}
      >
        <div className="flex h-full flex-col gap-5 rounded-lg bg-white  lg:gap-8">
          <div className="flex h-full flex-col  rounded-lg bg-white  ">
            <div className="grid grid-cols-2 border-b ">
              <span className="font-medium text-gray-700 p-5">
                Platform Name
              </span>
              <span className="text-gray-900 p-5  border-l">
                Bounty Game App
              </span>
            </div>
            <div className="grid grid-cols-2  border-b ">
              <span className="font-medium text-gray-700 p-5 ">
                Bounty Game Invitation Code
              </span>
              <span className="text-gray-900 p-5  border-l">532863012356</span>
            </div>
            <div className="grid grid-cols-2  border-b">
              <span className="font-medium text-gray-700 p-5">
                Register Bonus
              </span>
              <span className="text-gray-900 p-5  border-l">
                Up To ₹500 On First Deposit
              </span>
            </div>
            <div className="grid grid-cols-2 ">
              <span className="font-medium text-gray-700 p-5">
                Withdrawal Methods
              </span>
              <span className="text-gray-900 p-5  border-l">
                Bank Card, UPI, or USDT
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
