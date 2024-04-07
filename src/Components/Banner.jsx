// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from 'swiper/modules';
import "swiper/css";
import "swiper/css/bundle";
import sliderImg1 from '../assets/slider1.jpg';
import sliderImg2 from '../assets/slider2.jpg';
import sliderImg3 from '../assets/slider3.jpg';
import sliderImg4 from '../assets/slider4.jpg';

const Banner = () => {

    return (
        <div className=''>
            <Swiper slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation,EffectFade]}
                effect="fade"
                className="mySwiper">
                <SwiperSlide><img src={sliderImg1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={sliderImg2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={sliderImg3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={sliderImg4} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;