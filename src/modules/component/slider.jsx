import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SliderOne from '/sliderImg1.png';
import SliderTwo from '/sliderImg2.png';
import SliderThree from '/sliderImg3.png';


function Slides() {
  return (
    <>
        <div className='py-28'>
            <Swiper
                slidesPerView={3}
                spaceBetween={400}
                autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                }}
                loop={true}
                pagination={false}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='flex flex-row w-[600px] h-[350px] rounded-2xl'>
                        <div className='bg-reddish px-3 py-5 w-[270px] rounded-s-2xl h-[350px]'>
                            <p className='text-xl text-grey font-bold'>5.0</p>
                            <h2 className='text-4xl text-black font-bold py-4'>
                                Brand <br/>
                                Design
                            </h2>
                            <p className='text-base font-medium'>
                                Your brand is your identity. <br/>
                                Put your best foot forward <br/>
                                with a strong, unique brand <br/>
                                by your side.
                            </p>
                            <button className='text-white bg-black rounded-full py-2 px-10 my-2 text-lg'>Get Started</button>
                        </div>
                        <div>
                            <img src={SliderOne} className='w-[300px] h-[350px] rounded-e-2xl' alt='sliderOne' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-row w-[600px] h-[350px]'>
                        <div className='bg-green-50 px-3 py-5 w-[270px] rounded-s-2xl h-[350px]'>
                            <p className='text-xl text-grey font-bold'>5.0</p>
                            <h2 className='text-4xl text-black font-bold py-4'>
                                Digital <br/>
                                Experience
                            </h2>
                            <p className='text-base font-medium'>
                                We will help you create a<br/>
                                website that is visually<br/>
                                stunning and user friendly<br/>
                                from design to developement.
                            </p>
                            <button className='text-white bg-black rounded-full py-2 px-10 my-3 text-lg'>Get Started</button>
                        </div>
                        <div>
                            <img src={SliderTwo} className='w-[300px] h-[350px] rounded-e-2xl' alt='sliderOne' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-row w-[550px] h-[350px]'>
                        <div className='bg-yellowish px-3 w-[270px] py-5 rounded-s-2xl  h-[350px]'>
                            <p className='text-xl text-grey font-bold'>5.0</p>
                            <h2 className='text-4xl text-black font-bold py-4'>
                                Creative <br/>
                                Design
                            </h2>
                            <p className='text-base font-medium'>
                                Our team of creative<br/>
                                designer will work with you<br/>
                                to create design that<br/>
                                reflects your unique identify
                            </p>
                            <button className='text-white bg-black rounded-full py-2 px-10 my-3 text-lg'>Get Started</button>
                        </div>
                        <div>
                            <img src={SliderThree} className='w-[300px] h-[350px] rounded-e-2xl' alt='sliderOne' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-row w-[600px] h-[350px]'>
                        <div className='bg-green-50 px-3 py-5 w-[270px] rounded-s-2xl h-[350px]'>
                            <p className='text-xl text-grey font-bold'>5.0</p>
                            <h2 className='text-4xl text-black font-bold py-4'>
                                Digital <br/>
                                Experience
                            </h2>
                            <p className='text-base font-medium'>
                                We will help you create a<br/>
                                website that is visually<br/>
                                stunning and user friendly<br/>
                                from design to developement.
                            </p>
                            <button className='text-white bg-black rounded-full py-2 px-10 my-3 text-lg'>Get Started</button>
                        </div>
                        <div>
                            <img src={SliderTwo} className='w-[300px] h-[350px] rounded-e-2xl' alt='sliderOne' />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
    </div>
    </>
  );
}

export default Slides;
