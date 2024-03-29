import React, { useEffect, useRef, useContext, useState } from "react";
import { SongsContext } from "../../context/SongsContextProvider";

let audio1;
let playIcon1;
let playIcon2;
export const handlePlay = () => {
  if (audio1.current.played.length > 0) {
    if (audio1.current.paused) {
      playIcon1.current.src = "./imgs/spotify_pause.png";
      playIcon2.current.src = "./imgs/pause.png";
      audio1.current.play();
    } else {
      playIcon1.current.src = "./imgs/spotify_play.png";
      playIcon2.current.src = "./imgs/play.png";
      audio1.current.pause();
    }
  } else {
    playIcon1.current.src = "./imgs/spotify_pause.png";
    playIcon2.current.src = "./imgs/pause.png";
    audio1.current.src = song.preview;
    audio1.current.play();
  }
};

const MediaMiddle = ({
  audio,
  song,
  duration,
  currentTime,
  playIcon,
  playIconMobile,
  audioMobile,
  pBMobile,
}) => {
  const [prevSongs, setPrevSongs] = useState([]);
  audio1 = audio;
  playIcon1 = playIcon;
  playIcon2 = playIconMobile;

  let el = useRef();
  let songsContext = useContext(SongsContext);
  let songsStored = songsContext[0];
  let songIdHandler = songsContext[1];
  const playNext = () => {
    if (prevSongs.length > 30) {
      setPrevSongs([song]);
    } else {
      setPrevSongs((prev) => [...prev, song]);
    }
    console.log(prevSongs);
    let random3 =
      Math.round(Math.random() * 3) !== undefined
        ? Math.round(Math.random() * 3)
        : 2;
    let random24 =
      Math.round(Math.random() * 24) !== undefined
        ? Math.round(Math.random() * 24)
        : 2;
    let songNext;
    if (random3 && random24 && songsStored.length > 1) {
      songNext = songsStored[random3];
      songNext = songNext[random24];
    }
    songIdHandler(songNext.id);
  };
  const playPrev = () => {
    if (prevSongs.length > 2) {
      prevSongs.pop();
    }
    songIdHandler(prevSongs[prevSongs.length - 1].id);
  };
  const handleProgressBarUpdate = (ended = false) => {
    let percentage = (audio.current.currentTime / audio.current.duration) * 100;

    if (ended) {
      el.current.style.width = "0%";
      pBMobile.current.style.width = "0%";
      playIcon.current.src = "./imgs/spotify_play.png";
      playIconMobile.current.src = "./imgs/play.png";
    } else {
      el.current.style.width = percentage.toString() + "%";
      pBMobile.current.style.width = percentage.toString() + "%";
    }

    let minutes = "0" + Math.floor(audio.current.currentTime / 60);
    let seconds = "0" + Math.floor(audio.current.currentTime);
    currentTime.current.innerText =
      minutes.substr(-2) + ":" + seconds.substr(-2);
  };

  let progressBar = useRef();
  const handleProgressBarClick = (e) => {
    let elt = e.currentTarget.firstElementChild;
    let percentage =
      parseInt(e.nativeEvent.offsetX * 100) / e.currentTarget.clientWidth;
    elt.style.width = percentage.toString() + "%";

    audio.current.currentTime = (percentage / 100) * audio.current.duration;
  };

  audio.current &&
    (audio.current.ontimeupdate = () => handleProgressBarUpdate());
  audio.current &&
    (audio.current.onended = () => handleProgressBarUpdate(true));
  return (
    <div className="col middle-media-btm">
      <div className="d-flex align-items-center justify-content-center ps-5 ms-5 ms-md-3">
        <img src="./imgs/spotify_enable_shuffle.png" width="15" alt="" />
        <img
          src="./imgs/spotify_previous.png"
          width="14"
          onClick={playPrev}
          alt=""
        />
        <img
          src="./imgs/spotify_play.png"
          onClick={handlePlay}
          ref={playIcon}
          width="32"
          alt=""
        />
        <img
          src="./imgs/spotify_next.png"
          width="14"
          onClick={playNext}
          alt=""
        />
        <img src="./imgs/spotify_enable-repeat.png" width="15" alt="" />
      </div>
      <div className="progressContainer d-flex align-items-center position-relative ps-5">
        <span ref={currentTime} className="currentTime">
          00:00
        </span>
        <div
          ref={progressBar}
          id="progress-bar-btm"
          onClick={handleProgressBarClick}
        >
          <div ref={el} className="progress-bar-in">
            <audio ref={audio}></audio>
          </div>
        </div>
        <span ref={duration} className="duration">
          00:00
        </span>
      </div>
    </div>
  );
};

export default MediaMiddle;
