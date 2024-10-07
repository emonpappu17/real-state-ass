import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import slide1 from '../../assets/slide1.jpg'
import slide2 from '../../assets/slide2.jpg'
import slide3 from '../../assets/slide3.jpg'
import slide4 from '../../assets/slide4.jpg'
import slide5 from '../../assets/slide5.jpg'

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import 'swiper/css/bundle'

const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                navigation={true}
            >
                <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;