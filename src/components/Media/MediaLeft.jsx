import React, { useRef, useContext } from "react"
import { SongsContext } from "../../context/SongsContextProvider"

const MediaLeft = ({chosenSongs}) => {
  let songsContext = useContext(SongsContext)
    let songIdHandler = songsContext[1]
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
    <div className="col p-0">
        <div className="row flex-nowrap left-media-btm">
            <div className="col-2 position-relative">
                <img
                src={chosenSongs && chosenSongs.album.cover_big}
                width=""
                className=""
                alt=""
                onClick={() => songIdHandler(chosenSongs && chosenSongs.id)}
                />
                <span>
                    <img
                    src="./imgs/spotify_cirle_indicator.png"
                    alt=""
                    />
                </span>
            </div>
            <div className="col-auto ms-2 d-flex align-items-center p-0">
                <div className="left-media-btm-text">
                    <h6 className="text-white">{chosenSongs && chosenSongs.artist.name}</h6>
                    <p className="mb-0">{chosenSongs && chosenSongs.title_short}</p>
                </div>
            </div>
            <div className="col-2 d-flex align-items-center p-0">
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
            </div>
        </div>
    </div>
  )
}

export default MediaLeft