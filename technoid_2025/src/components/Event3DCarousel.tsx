"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const events = [
  { id: 1, title: "CODING WAR", color: "#00f3ff", desc: "Algorithm Battle" },
  { id: 2, title: "ROBO RACE", color: "#ff00ff", desc: "High Velocity" },
  { id: 3, title: "CYBER HUNT", color: "#ffee00", desc: "Treasure Quest" },
  { id: 4, title: "GAMING", color: "#00f3ff", desc: "Virtual Combat" },
  { id: 5, title: "QUIZ", color: "#ff00ff", desc: "Neural Test" },
];

export default function Event3DCarousel() {
  return (
    <div className="w-full">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper w-full max-w-5xl"
      >
        {events.map((item) => (
          <SwiperSlide 
            key={item.id} 
            style={{ width: "300px", height: "400px" }}
            className="bg-black/80 rounded-lg overflow-hidden relative group"
          >
            <div 
                className="absolute inset-0 border-2" 
                style={{ borderColor: item.color, boxShadow: `0 0 15px ${item.color}40` }} 
            />
            <div className="h-full flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-3xl font-bold font-orbitron" style={{ color: item.color }}>
                {item.title}
              </h3>
              <p className="text-gray-300 font-rajdhani text-xl mt-2">{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
