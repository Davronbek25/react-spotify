import React from "react";
import SwiperSlides from "../SwiperSlides/SwiperSlides";

const MobileMainSecond = ({songs}) => {
  const titles = [
    "Your top mixes",
    "Made for you",
    "Based on your recent listening",
    "Episodes for you",
    "Uniquely yours",
    "Recommended radio",
    "Playlist tutte da scoprire!",
    "Popular radio",
    "For fans of AURORA",
    "Best of artists",
    "More like Billie Eilish",
    "More like Rihanna",
    "Mood",
    "Recommended for today",
    "Your favorite artists",
    "More like Hot Hits Italia",
    "More of what you like",
    "Popular albums",
  ];
  return (
    <div id="mobileMainSecond">
      {titles &&
        titles.map((title, index) => (
          <div key={index}>
            <h4 className={`${index === 0 ? "mt-1 text-white ms-3" : "mt-3 text-white ms-3"}`}>{title}</h4>
            <div className="row mt-4 ms-0">
              <SwiperSlides songs={songs} start={[index + 3, index + 7]} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default MobileMainSecond;
