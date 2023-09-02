// data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Menu Maker',
          path: '/work6.png',
          url: 'https://www.figma.com/file/478lXWjyWdrS8ubNKiTOzc/MenuMaker?type=design&node-id=0-1&mode=design&t=l8X7YLmiTGvRz6dN-0',
        },
        {
          title: 'Bahia Tech',
          path: '/work2.png',
          url: 'https://www.figma.com/file/z6n1uRBIo0OHkyHmc83hhv/Bahia-Tech?type=design&node-id=0-1&mode=design&t=Ll9KWPrBO4MnOzkz-0',
        },
        {
          title: 'Gooday',
          path: '/work3.png',
          url: 'https://www.figma.com/file/8BDqXL9dN50vM0rVs2m1Uy/Project-Gooday?type=design&node-id=105-253&mode=design&t=eXxLAvJEPQJYLE0i-0',
        },
        {
          title: 'title',
          path: '/work5.png',
          url: 'https://encantosdepadilha.vercel.app/'
        },
      ],
    },
    // {
    //   images: [
    //     {
    //       title: 'title',
    //       path: '/thumb4.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb1.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb2.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb3.jpg',
    //     },
    //   ],
    // },
  ],
};

import { BsArrowRight } from 'react-icons/bs'
import Image from 'next/image'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'



const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px] "
    >
      {
        workSlider.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index} >
              <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
                {
                  slide.images.map((image, index) => {
                    return (
                      <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                        <div className='flex items-center justify-center relative overflow-hidden group'>
                          {/* image */}
                          <Image src={image.path} width={500} height={300} alt='' />

                          {/* overlay */}
                          <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>

                          {/* title */}
                          <div className='absolute translate-y-full bottom-0 group-hover:-translate-y-10 xl:group-hover:-translate-y-20 transition-all duration-300'>
                            <a href={image.url}>
                              <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                                <div className='delay-100'>VER</div>
                                <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJETO</div>
                                <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
};

export default WorkSlider;
