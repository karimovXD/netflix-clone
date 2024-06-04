import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

// import required modules
import { FreeMode, Navigation } from 'swiper/modules';

//components
import SliderImage from './SliderImage';;

const Slider = ({ movies }) => {

    return (
        <div>
            <Swiper
                slidesPerView={2}
                spaceBetween={5}
                freeMode={true}
                modules={[FreeMode, Navigation]}
                navigation={true}
                breakpoints={{
                    480: {
                        slidesPerView: 2,
                    },
                    640: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                }}>
                {
                    movies?.map((item, i) => <SwiperSlide key={i} className='w-auto h-auto'>
                        <SliderImage item={item} />
                    </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    )
}

export default Slider