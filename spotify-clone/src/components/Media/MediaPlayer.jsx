import React, { useRef, useContext } from "react"
import { SongsContext } from "../../context/SongsContextProvider"
import MediaLeft from './MediaLeft'
import MediaMiddle from './MediaMiddle'
import MediaRight from './MediaRight'

const MediaPlayer = ({audio, duration, currentTime, playIcon}) => {
    let songsContext = useContext(SongsContext)
    let songs = songsContext[0]
    let songId = songsContext[2]
    let chosenSong = [...songs.map(songes => songes.find(song => song.id === songId))]
    let chosenSongs = chosenSong.find(s => s !== undefined)
  return (
    <div className="play-media">
        <div className="container-fluid">
            <div className="row d-flex justify-content-between">
                <MediaLeft chosenSongs={chosenSongs}/>
                <MediaMiddle audio={audio} song={chosenSongs} duration={duration} currentTime={currentTime} playIcon={playIcon}/>
                <MediaRight audio={audio}/>
            </div>
        </div>
    </div>
  )
}

export default MediaPlayer