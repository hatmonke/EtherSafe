import {FaTwitter, FaPaperPlane} from 'react-icons/fa'

export default function Cta() {
  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="relative px-8 py-12 md:py-20 rounded-[3rem] overflow-hidden">
          {/* Radial gradient */}
          <div className="absolute top-0 flex items-center justify-center w-1/3 -translate-x-1/2 -translate-y-1/2 pointer-events-none left-1/2 -z-10 aspect-square" aria-hidden="true">
            <div className="absolute inset-0 translate-z-0 bg-yellow-500 rounded-full blur-[120px] opacity-70" />
            <div className="absolute w-1/4 h-1/4 translate-z-0 bg-amber-400 rounded-full blur-[40px]" />
          </div>
          {/* Blurred shape */}
          <div className="absolute bottom-0 left-0 translate-y-1/2 opacity-50 pointer-events-none blur-2xl -z-10" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
              <defs>
                <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                  <stop offset="0%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path fill="url(#bs5-a)" fillRule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
            </svg>
          </div>
          {/* Content */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="pb-4 text-transparent h2 bg-clip-text bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">Take full control of your investment</h2>
            <p className="mb-8 text-lg text-slate-400">Join us and learn more</p>
            <div className='flex items-center justify-center gap-2'>
              <a className="transition duration-150 ease-in-out btn text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group" href="https://twitter.com/finoproject">
                <FaTwitter className="" />
              </a>
              <a className="transition duration-150 ease-in-out btn text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group" href="https://t.me/finoproject">
                <FaPaperPlane className="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}