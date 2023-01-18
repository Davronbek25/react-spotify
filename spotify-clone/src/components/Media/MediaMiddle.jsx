import React, { useEffect, useRef } from 'react'

const MediaMiddle = ({audio, song, duration, currentTime, playIcon}) => {

  let el = useRef()
  const handleProgressBarUpdate = (ended = false) => {
    let percentage = (audio.current.currentTime / audio.current.duration) * 100

    if(ended){
        el.current.style.width = "0%"
        playIcon.current.src = "../../../public/imgs/spotify_play.png"
    }else el.current.style.width = percentage.toString() + "%"

    let minutes = "0" + Math.floor(audio.current.currentTime / 60)
    let seconds = "0" + Math.floor(audio.current.currentTime)
    currentTime.current.innerText = minutes.substr(-2) + ":" + seconds.substr(-2)
  }

  const handlePlay = () => {
    if(audio.current.played.length > 0){
        if(audio.current.paused) {
            playIcon.current.src = "../../../public/imgs/spotify_pause.png"
            audio.current.play()
        }else {
            playIcon.current.src = "../../../public/imgs/spotify_play.png"
            audio.current.pause()
        }
    }else {
        playIcon.current.src = "../../../public/imgs/spotify_pause.png"
        audio.current.play()
    }
  }

  let progressBar = useRef()
  const handleProgressBarClick = (e) => {
      let elt = e.currentTarget.firstElementChild
      let percentage = parseInt(e.nativeEvent.offsetX * 100) / e.currentTarget.clientWidth
      elt.style.width = percentage.toString() + "%"
  
      audio.current.currentTime = (percentage / 100) * audio.current.duration
  }

  audio.current && (audio.current.ontimeupdate = () => handleProgressBarUpdate())
  audio.current && (audio.current.onended = () => handleProgressBarUpdate(true))
  return (
    <div className="col-6 middle-media-btm">
        <div className="d-flex align-items-center">
            <img
            src="./imgs/spotify_enable_shuffle.png"
            width="15"
            alt=""
            />
            <img
            src="./imgs/spotify_previous.png"
            width="14"
            alt=""
            />
            <img
            src="./imgs/spotify_play.png"
            onClick={handlePlay}
            ref={playIcon}
            width="32"
            alt=""
            />
            <img src="./imgs/spotify_next.png" width="14" alt="" />
            <img
            src="./imgs/spotify_enable-repeat.png"
            width="15"
            alt=""
            />
        </div>
        <div className="progressContainer d-flex align-items-center position-relative">
            <span ref={currentTime} className="currentTime">00:00</span>
            <div
            ref={progressBar}
            id="progress-bar-btm"
            onClick={handleProgressBarClick}
            >
              <div ref={el} className="progress-bar-in">
                  <audio ref={audio}></audio>
              </div>
            </div>
            <span ref={duration} className="duration">00:00</span>
        </div>
    </div>
  )
}

export default MediaMiddle