import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function SwiperSlides({songs}) {
  const swSlides = [];
  const swiperSlides = () => {
    for (let i = 0; i < 3; i++) {
      for(let j = 0; j < 2; j++) {
        swSlides.push(
          <SwiperSlide key={i * 3 + j}>
            <div className="card">
              <img src={songs[i][i === 0 ? j + 1 : j + 4].album.cover_big} className="card-img-top rounded" alt="..." />
              <div className="card-body p-0">
                <h5 className="card-title text-start">{songs[i][i === 0 ? j : j + 4].title.substring(0, 20)}</h5>
              </div>
            </div>
          </SwiperSlide>
        );
      }
    }
    return swSlides;
  };
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {swiperSlides()}
      </Swiper>
    </>
  );
}
