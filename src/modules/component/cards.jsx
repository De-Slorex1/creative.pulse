import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import cardOne from '/card1.png'
import cardTwo from '/card2.png'
import cardThree from '/card3.png'
import cardFour from '/card4.png'
import cardFive from '/card5.png'

function Card() {
  return (
    <>
        <div>
            <Swiper
                slidesPerView={5}
                spaceBetween={8}
                autoplay={{
                delay: 1000,
                disableOnInteraction: false,
                }}
                loop={true}
                pagination={false}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img className='w-[300px] h-[200px] rounded-md' src={cardOne} alt={cardOne} /></SwiperSlide>
                <SwiperSlide><img className='w-[300px] h-[200px] rounded-md' src={cardTwo} alt={cardTwo} /></SwiperSlide>
                <SwiperSlide><img className='w-[300px] h-[200px] rounded-md' src={cardThree} alt={cardThree} /></SwiperSlide>
                <SwiperSlide><img className='w-[300px] h-[200px] rounded-md' src={cardFour} alt={cardFour} /></SwiperSlide>
                <SwiperSlide><img className='w-[300px] h-[200px] rounded-md' src={cardFive} alt={cardFive} /></SwiperSlide>
                <SwiperSlide><img className='w-[300px] h-[200px] rounded-md' src={cardThree} alt={cardThree} /></SwiperSlide>
            </Swiper>
    </div>
    </>
  );
}

export default Card;
