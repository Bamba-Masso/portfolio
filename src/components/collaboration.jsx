import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination , Autoplay } from "swiper/modules";

const collaborators = [
  { name: "DOUBIA", image: "madany.jpeg" },
  { name: "KONAN willfrid", image: "willy.jpg" },
  { name: "DIARRASSOUBA YACOUBA",  image: "yacouba.jpg" },
  { name: "AKPOUE Kouakou J.Romaric",  image: "Akoupé.jpg" },
  { name: "Sophie Bernard",  image: "emma.jpg" },
  { name: "ARIELLE",  image: "arielle.jpg" },
  { name: "YALE Anne marie ",  image: "anne.jpg" },
  { name: "YALE Anne marie ",  image: "faï.jpeg" },
];

const CollaboratorsSlider = () => {
    return (
      <div className="w-full flex justify-center p-4">
     <div className="w-[68%]">
     <h2 className="text-center text-white text-2xl font-bold mb-4">Mes Collaborateurs</h2>
  <Swiper
    modules={[Pagination, Autoplay]}
    spaceBetween={20}
    slidesPerView={1} 
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },  
      1024: { slidesPerView: 3 },
    }}
    pagination={{ clickable: true }}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    className="rounded-lg shadow-lg"
  >
    {collaborators.map((person, index) => (
      <SwiperSlide key={index} className="p-4 bg-gray-800 text-center rounded-lg shadow-md">
        
    
        <div
          className="w-48 h-56 md:w-48 md:h-64 lg:w-52 lg:h-72 mx-auto bg-cover bg-center rounded-lg transform transition-transform duration-300 hover:scale-105"
          style={{ backgroundImage: `url(${person.image})` }}
        ></div>

        <h3 className="text-sm p-4 font-semibold text-white">{person.name}</h3>
      </SwiperSlide>
    ))}
  </Swiper>
     </div>
</div>
      );
};

export default CollaboratorsSlider;