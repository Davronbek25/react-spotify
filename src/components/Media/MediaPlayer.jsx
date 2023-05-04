import React, { useRef, useContext } from "react"
import { SongsContext } from "../../context/SongsContextProvider"
import MediaLeft from './MediaLeft'
import MediaMiddle from './MediaMiddle'
import MediaRight from './MediaRight'

const MediaPlayer = ({audio, duration, currentTime, playIcon}) => {
    let songsContext = useContext(SongsContext)
    let songs = songsContext[0]
    let chosenSongs = songs.length > 1 ? songs[1][5] : ''
    let songId = songsContext[2]
  return (
    <div className="play-media">
        <div className="container-fluid">
            <div className="row d-flex flex-nowrap justify-content-between">
                <MediaLeft chosenSongs={chosenSongs}/>
                <MediaMiddle audio={audio} song={chosenSongs} duration={duration} currentTime={currentTime} playIcon={playIcon}/>
                <MediaRight audio={audio}/>
            </div>
        </div>
    </div>
  )
}

export default MediaPlayer