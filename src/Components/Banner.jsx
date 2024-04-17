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
        <div className=' relative lg:mx-12'>
            <div className="absolute z-[2] top-20 left-16 md:top-64 md:left-30 lg:top-64 lg:left-44">
                <h1 data-aos="fade-right" data-aos-duration="1000" className=" text-3xl md:text-5xl mr-6 font-Playfair text-white font-bold">
                    Welcome to <span className="text-[#EFAB00]">Aura Ventures</span><br /> Explore Now!</h1>
                <p data-aos="fade-right" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-delay='1' className="py-6 text-white invisible md:visible">Embark on unforgettable adventures with Odyssey Travel Co.<br></br> Explore exotic destinations, discover hidden treasures, and create lasting memories.<br></br> Your journey begins here.</p>

            </div>
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
                modules={[Pagination, Navigation, EffectFade, Autoplay]}
                effect="fade"
                className="mySwiper md:w-full md:h-[650px] rounded-3xl brightness-[60%]">
                <SwiperSlide><img className="w-full h-full" src={sliderImg1} alt="" /></SwiperSlide>
                <SwiperSlide><img className="w-full h-full" src={sliderImg2} alt="" /></SwiperSlide>
                <SwiperSlide><img className="w-full h-full" src={sliderImg3} alt="" /></SwiperSlide>
                <SwiperSlide><img className="w-full h-full" src={sliderImg4} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;