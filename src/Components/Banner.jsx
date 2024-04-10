// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/bundle";
import sliderImg1 from '../assets/slider1.jpg';
import sliderImg2 from '../assets/slider2.jpg';
import sliderImg3 from '../assets/slider3.jpg';
import sliderImg4 from '../assets/slider4.jpg';

const Banner = () => {

    return (
        <div className=' w-80 lg:w-[600px]'>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, EffectFade,Autoplay]}
                effect="fade"
                className="mySwiper">
                <SwiperSlide><img className="rounded-3xl" src={sliderImg1} alt="" /></SwiperSlide>
                <SwiperSlide><img className="rounded-3xl" src={sliderImg2} alt="" /></SwiperSlide>
                <SwiperSlide><img className="rounded-3xl" src={sliderImg3} alt="" /></SwiperSlide>
                <SwiperSlide><img className="rounded-3xl" src={sliderImg4} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;