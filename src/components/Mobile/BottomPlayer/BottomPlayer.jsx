import { useRef, useContext, useEffect } from "react";
import { SongsContext } from "../../../context/SongsContextProvider";
import { average } from "color.js";

const BottomPlayer = () => {
  let songsContext = useContext(SongsContext);
  let bottomPlayerRow = useRef()

  let songs = songsContext[0];
  let chosenSongs = songs.length > 1 ? songs[1][5] : "";
  let songIdHandler = songsContext[1];
  let heart = useRef();
  const likeBtn = () => {
    if (heart.current) {
      if (heart.current.getAttribute("src").length === 23) {
        heart.current.setAttribute("src", "./imgs/spotify_liked.png");
      } else if (heart.current.getAttribute("src").length === 24) {
        heart.current.setAttribute("src", "./imgs/spotify_like.png");
      } else console.log("error from like button(heart)");
    }
  };

  chosenSongs &&
    average(chosenSongs.album.cover_big, { format: "hex" }).then((color) =>{
      if(bottomPlayerRow.current) {
        bottomPlayerRow.current.style.backgroundColor = color
      }
    });

  return (
    <div id="bottomPlayer" className="container">
      <div ref={bottomPlayerRow} className="row d-flex justify-content-between">
        <div className="col-9 d-flex p-0 position-relative">
          <img
            src={chosenSongs && chosenSongs.album.cover_big}
            width=""
            className=""
            alt=""
            onClick={() => songIdHandler(chosenSongs && chosenSongs.id)}
          />
          <span className="bottom-player-text">
            <h6 className="mb-0">{chosenSongs && chosenSongs.artist.name}</h6>
            <p className="mb-0">{chosenSongs && chosenSongs.title_short}</p>
          </span>
        </div>
        <div className="col-3 d-flex align-items-center bottom-player-right">
          <img
            src="./imgs/heart-mobile.png"
            alt="like"
            ref={heart}
            onClick={likeBtn}
          />
          <i className="fa fa-play text-white ms-auto" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default BottomPlayer;
