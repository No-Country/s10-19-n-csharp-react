import React from 'react'
import ProductDay from '../../components/Sections/ProductDay'
import { CardSlider } from '../../components/CardSlider/CardSlider'

import { Navigation, Pagination, A11y, Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Features from '../../components/Sections/Features'

const Main = () => {
  return (
    <>

      <main className='main relative w-full h-screen  bg-greenCustom overflow-hidden box-border flex flex-col justify-start items-center content-center gap-[2rem]'>
        <section className='banner w-screen top-0 h-[calc(100vh-110px)] bg-slate-500 flex justify-center items-center content-center'>
          <Swiper
      // install Swiper modules
            modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            effect='fade'
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 9000,
              disableOnInteraction: false
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='mySwiper w-screen h-[100%] bg-orange-200 z-0'
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            ...
          </Swiper>
        </section>
      </main>

      <Features/>
      <ProductDay />
      <CardSlider />

    </>

  )
}

export default Main
