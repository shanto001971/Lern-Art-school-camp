
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Style.css'
import { Autoplay, Pagination, Navigation } from 'swiper';
import { useRef } from 'react';

const BannerSlider = () => {

    const progressCircle = useRef(null);
  const progressContent = useRef(null);
  // const onAutoplayTimeLeft = (s, time, progress) => {
  //   progressCircle.current.style.setProperty('--progress', 1 - progress);
  //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  // };

  
    return (
        <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        
        className="mySwiper"
      >
        <SwiperSlide><img src="https://media.istockphoto.com/id/639999614/vector/fish-child-drawing.jpg?s=612x612&w=0&k=20&c=4wifhg5cOS1J7a-RJX2MVWc6bng8os7nCr9IKExk0Tg=" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.kidsartncraft.com/wp-content/uploads/2022/04/Lovely-Engaging-And-Simple-Drawing-For-Kids.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Kids/Articles/Kid%24!e2%24!80%24!99s+Art/kids+art-carousel.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://empoweredparents.co/wp-content/uploads/2019/09/stages-of-drawing-3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://kidsactivitiesblog.com/wp-content/uploads/2014/04/kids-activities-3yrs-7.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVkeipuslj9j-bkGkdp0nNZ8PL_32OIwCzzA&usqp=CAU" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.hellowonderful.co/ckfinder/userfiles/images/6-mixed-media-kids-spring-art.jpg" alt="" /></SwiperSlide>
        
        <div className="autoplay-progress" slot="container-end" >
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
    );
};

export default BannerSlider;