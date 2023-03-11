import React, { useRef, useState } from 'react'

const MediaRight = ({audio}) => {

  const [volume, setVolume] = useState(1)
  const [mute, setMute] = useState(false)
  let range = useRef()
  let speaker = useRef()
  let speakerStatus
  
  const volumeIconControl = (v) => {
    if(speaker.current) {
      if(v < 2) {
          speaker.current.src = "./imgs/spotify_speaker_mute.png"
          speakerStatus = "mute"
      }else if(v < 33) {
          speaker.current.src = "./imgs/spotify_speaker_low.png"
          speakerStatus = "low"
      }else if(v > 33 && v < 66) {
          speaker.current.src = "./imgs/spotify_speaker_mid.png"
          speakerStatus = "mid"
      }else {
          speaker.current.src = "./imgs/spotify_speaker_high.png"
          speakerStatus = "high"
      }
    }
  }
  
  if(range.current && mute){
    speakerStatus = range.current.value < 2 ? 
    "mute" : range.current.value < 33 ?
    "low" : range.current.value > 33 && range.current.value < 66 ? 
    "mid" : "high"
    
    audio.current.volume = volume

    volumeIconControl(volume * 100)
  }

  const handleChangeVolume = (e) => {
    let volume = e.target.value / 100
    setVolume(volume)
    audio.current.volume = volume

    volumeIconControl(e.target.value)
  }

  const handleMute = () => {
    if(mute) {
      setMute(prev => !prev)
      audio.current.volume = 0
      speaker.current.src = "./imgs/spotify_speaker_mute.png"
    }else {
      setMute(prev => !prev)
      audio.current.volume = volume
      volumeIconControl(volume * 100)
    }
  }

  return (
    <div className="col text-white right-media-btm ps-5 pe-0 ps-md-3">
        <div className="d-flex align-items-center h-100 float-end">
            <img src="./imgs/spotify_lyrics.png" alt="lyrics" />
            <img src="./imgs/spotify_queue.png" alt="queue" />
            <img
            src="./imgs/spotify_connect-to-device.png"
            alt="connect to a device"
            />
            <img
            id="spotify-speaker"
            ref={speaker}
            src="./imgs/spotify_mute.png"
            onClick={handleMute}
            alt="mute"
            />
            <input
            ref={range}
            type="range"
            defaultValue
            onChange={handleChangeVolume}
            />
            <img
            src="./imgs/spotify_full-screen.png"
            alt="full screen"
            />
        </div>
    </div>
  )
}

export default MediaRight