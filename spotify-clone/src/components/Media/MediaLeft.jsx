import React, { useRef, useContext } from "react"
import { SongsContext } from "../../context/SongsContextProvider"

const MediaLeft = ({chosenSongs}) => {
    // console.log(chosenSongs)
    // let songsContext = useContext(SongsContext)
    // let songs = songsContext[0]
    // let songId = songsContext[2]
    // console.log(songId)
    // let chosenSong = [...songs.map(songes => songes.find(song => song.id === songId))]
    // chosenSong[0] && console.log(chosenSong[0].album.cover_big)
    let heart = useRef()
    const likeBtn = () => {
        if(heart.current) {
            if (heart.current.getAttribute("src").length === 23) {
              heart.current.setAttribute("src", "./imgs/spotify_liked.png");
            } else if (heart.current.getAttribute("src").length === 24) {
              heart.current.setAttribute("src", "./imgs/spotify_like.png");
            } else console.log("error from like button(heart)");
        }
      };
  return (
    <div className="col-3 p-0">
        <div className="row left-media-btm">
            <div className="col-2 position-relative">
                <img
                src={chosenSongs && chosenSongs.album.cover_big}
                width=""
                className=""
                alt=""
                />
                <span>
                    <img
                    src="./imgs/spotify_cirle_indicator.png"
                    alt=""
                    />
                </span>
            </div>
            <div className="col-2 ms-1 d-flex align-items-center p-0">
                <div className="left-media-btm-text">
                    <h6 className="text-white">{chosenSongs && chosenSongs.artist.name}</h6>
                    <p className="mb-0">{chosenSongs && chosenSongs.album.title_short}</p>
                </div>
            </div>
            <div className="col-2 d-flex align-items-center p-0">
                <span>
                    <img
                    src="./imgs/spotify_like.png"
                    alt="like"
                    ref={heart}
                    onClick={likeBtn}
                    />
                    <img
                    src="./imgs/spotify_picture-in-picture.png"
                    alt=""
                    />
                </span>
            </div>
        </div>
    </div>
  )
}

export default MediaLeft