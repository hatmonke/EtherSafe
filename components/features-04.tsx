import { FaArrowUp, FaLock, FaMoneyBill, FaPaintBrush, FaRocket } from "react-icons/fa";

export default function Features04() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
        {/* Blurred shape */}
        <div
          className="absolute top-0 left-0 -mt-24 -ml-16 pointer-events-none blur-2xl opacity-70 -z-10"
          aria-hidden="true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
            <defs>
              <linearGradient
                id="bs4-a"
                x1="19.609%"
                x2="50%"
                y1="14.544%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              fill="url(#bs4-a)"
              fillRule="evenodd"
              d="m0 0 461 369-284 58z"
              transform="matrix(1 0 0 -1 0 427)"
            />
          </svg>
        </div>

        <div className="pt-16 pb-12 md:pt-32 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 md:pb-20">
            <h2 className="pb-4 text-transparent h2 bg-clip-text bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
              Roadmap
            </h2>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-800">
            {/* Row */}
            <div className="py-8 first-of-type:pt-0 last-of-type:pb-0">
              <div>
                <div className="inline-flex pb-6 font-medium text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-200">
                  Q2 2023
                </div>
              </div>
              <div className="grid gap-8 mb-2 md:grid-cols-3 md:gap-12">
                {/* Feature */}
                <div>
                  <div className="flex items-center mb-1 space-x-2">
                    <FaRocket />
                    <h4 className="font-medium text-slate-50">Token Launch</h4>
                  </div>
                  <p className="text-sm text-slate-400">
                    The $Fino token will launch on Uniswap as an erc-20 Token
                  </p>
                </div>
                {/* Feature */}
                <div>
                  <div className="flex items-center mb-1 space-x-2">
                    <FaMoneyBill />
                    <h4 className="font-medium text-slate-50">
                    Community BuyBack
                    </h4>
                  </div>
                  <p className="text-sm text-slate-400">Taxes from the token will be locked in a vault. The community will have to rally to unlock the buyback</p>
                </div>
                {/* Feature */}
                <div>
                  <div className="flex items-center mb-1 space-x-2">
                    <svg
                      className="shrink-0 fill-slate-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7ZM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5ZM15.707 14.293 13.314 11.9a8.019 8.019 0 0 1-1.414 1.414l2.393 2.393a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414Z" />
                    </svg>
                    <h4 className="font-medium text-slate-50">
                    Tracking Sites
                    </h4>
                  </div>
                  <p className="text-sm text-slate-400">$FINO will be listed on popular coin tracking sites like CoinMarketCap & more</p>
                </div>
              </div>
            </div>
            {/* Row */}
            <div className="py-8">
              <div>
                <div className="inline-flex pb-6 font-medium text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-200">
                  Q3 2023
                </div>
              </div>
              <div className="grid gap-8 mb-2 md:grid-cols-3 md:gap-12">
                {/* Feature */}
                <div>
                  <div className="flex items-center mb-1 space-x-2">
                    <FaArrowUp />
                    <h4 className="font-medium text-slate-50">
                    New Buyback Utilities
                    </h4>
                  </div>
                  <p className="text-sm text-slate-400">
                  The team will add a new buyback utility 
                  </p>
                </div>
                {/* Feature */}
                <div>
                  <div className="flex items-center mb-1 space-x-2">
                    <FaLock />
                    <h4 className="font-medium text-slate-50">Staking</h4>
                  </div>
                  <p className="text-sm text-slate-400">
                  The $FINO token will be able to be staked & the community can earn high APY’s
                  </p>
                </div>
                {/* Feature */}
                <div>
                  <div className="flex items-center mb-1 space-x-2">
                    <FaPaintBrush />
                    <h4 className="font-medium text-slate-50">BuyBack NFTs</h4>
                  </div>
                  <p className="text-sm text-slate-400">
                  An NFT collection will be released with a unique utility that will also buyback the $Fino token
                  </p>
                </div>
              </div>
            </div>
            {/* Row */}
            <div className="py-8">
              <div>
                <div className="inline-flex pb-6 font-medium text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-200">
                  Q4 2023
                </div>
              </div>
              <div className="grid gap-8 mb-2 md:grid-cols-3 md:gap-12">
                {/* Feature */}
                <div>
                  <div className="flex items-center mb-1 space-x-2">
                    <svg
                      className="shrink-0 fill-slate-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="M15.5 11H13a5.022 5.022 0 0 1-3.453-1.4l-1.2 1.607A7.065 7.065 0 0 0 12 12.92v1.586a.5.5 0 0 0 .853.349l3-3A.5.5 0 0 0 15.5 11ZM1 5a5.022 5.022 0 0 1 3.453 1.4l1.205-1.61A7.028 7.028 0 0 0 1 3a1 1 0 1 0 0 2ZM13 5h2.5a.5.5 0 0 0 .354-.853l-3-3A.5.5 0 0 0 12 1.5v1.58a7.032 7.032 0 0 0-4.6 2.72L5 9a5.025 5.025 0 0 1-4 2 1 1 0 0 0 0 2 7.034 7.034 0 0 0 5.6-2.8L9 7a5.025 5.025 0 0 1 4-2Z" />
                    </svg>
                    <h4 className="font-medium text-slate-50">TBA</h4>
                  </div>
                  <p className="text-sm text-slate-400">

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
