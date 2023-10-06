import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import slide1 from '../../assets/images/michael-negrete-OYA4jUcconI-unsplash.jpg'
import slide2 from '../../assets/images/alvaro-cvg-mW8IZdX7n8E-unsplash.jpg'
import slide3 from '../../assets/images/2150763120.jpg'
import slide4 from '../../assets/images/joel-overbeck-fGPGd9PFd3w-unsplash.jpg'
import slide5 from '../../assets/images/jon-tyson-CP68p1fZS8k-unsplash.jpg'
import slide6 from '../../assets/images/senior-people-celebrating-together.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Banner = () => {
  return (
    <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img className='w-full h-[90vh] ' src={slide1} alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full h-[90vh] ' src={slide2} alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full h-[90vh] ' src={slide3} alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full h-[90vh] ' src={slide4} alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full h-[90vh] ' src={slide5} alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full h-[90vh] ' src={slide6} alt="" /></SwiperSlide>
        </Swiper>
    </div>
  );
};

export default Banner;
