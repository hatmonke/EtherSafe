'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Particles from './particles'

import Client01 from '@/public/images/uniswap.svg'
import Client02 from '@/public/images/dextools.svg'
import Client03 from '@/public/images/coinmarketcap.svg'
import Client04 from '@/public/images/coingecko.svg'
import Client05 from '@/public/images/yahoo.svg'
import Client06 from '@/public/images/pinksale.svg'
import Client07 from '@/public/images/benzinga.svg'
import Client08 from '@/public/images/dexview.svg'
import Client09 from '@/public/images/uniswap.svg'

// Import Swiper
import Swiper, { Autoplay } from 'swiper'
import 'swiper/swiper.min.css'
Swiper.use([Autoplay])

export default function Clients() {

  useEffect(() => {
    const carousel = new Swiper('.clients-carousel', {
      slidesPerView: 'auto',
      spaceBetween: 64,
      centeredSlides: true,
      loop: true,
      speed: 10000,
      noSwiping: true,
      noSwipingClass: 'swiper-slide',
      autoplay: {
        delay: 0,
        disableOnInteraction: true,
      },
    })
  }, [])

  return (
    <section>
      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">

        {/* Particles animation */}
        <div className="absolute inset-0 max-w-6xl px-4 mx-auto sm:px-6">
          <Particles className="absolute inset-0 -z-10" quantity={5} />
        </div>

        <div className="py-12 md:py-16">
          <div className="overflow-hidden">
            {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
            {/* * Custom styles in src/css/additional-styles/theme.scss */}
            <div className="relative clients-carousel swiper-container before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-slate-900 after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-slate-900">
              <div className="swiper-wrapper !ease-linear select-none items-center">
                {/* Carousel items */}
                <div className="swiper-slide !w-auto">
                  <Image src={Client01} alt="Client 01" width={130} height={50}  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image src={Client02} alt="Client 02" width={130} height={50}  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image className="mt-1" src={Client03} alt="Client 03" width={130} height={50}  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image src={Client04} alt="Client 04" width={130} height={50} />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image src={Client05} alt="Client 05" width={130} height={50}  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image src={Client06} alt="Client 06" width={130} height={50}  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image src={Client07} alt="Client 07" width={130} height={50} />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image src={Client08} alt="Client 08" width={130} height={50}  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image className="mt-2" src={Client09} alt="Client 09" width={130} height={50} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}