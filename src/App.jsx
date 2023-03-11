import { useEffect, useMemo, useRef, useState } from "react";
import SideBar from "./components/SideBar/SideBar";
import Main from "./components/Main/Main";
import MediaPlayer from "./components/Media/MediaPlayer";
import useFetch from "./customHooks/useFetch";
import SongsContextProvider from "./context/SongsContextProvider";

function App() {
  const [res, setRes] = useState([])
  const [reload, setReload] = useState(false)
  const [songId, setSongId] = useState(1449740572)
  const [song, setSong] = useState({})
  const currentTime = useRef()
  const duration = useRef()
  const audio = useRef()
  const playIcon = useRef()

  const songIdHandler = (id) => {
    setSongId(id)
    let chosenSong = [...res.map(songes => songes.find(song => song.id === id))]
    let selectedSong = chosenSong.find(s => s !== undefined)
    playIcon.current && (playIcon.current.src = "./imgs/spotify_pause.png")
    if(selectedSong) {
      setSong(selectedSong)
      audio.current.src = selectedSong.preview
      audio.current.play()

      currentTime.current && (currentTime.current.innerText = "00:00")
      duration.current && ( duration.current.innerText = ("0" + Math.floor(selectedSong.duration / 60)).substr(-2) +
      ":" + ("0" + Math.floor(selectedSong.duration % 60)).substr(-2))
    }
  }
  let responder = (arr) => setRes(arr)
  const reloader = () => setReload(prev => !prev)

  useFetch(reloader, responder, reload)
  return (
    <SongsContextProvider songs={res} songIdHandler={songIdHandler} songId={songId}>
      <div className="container-fluid main-container g-0 d-flex">
        <SideBar/>
        <Main/>
        <MediaPlayer audio={audio} duration={duration} currentTime={currentTime} playIcon={playIcon}/>
      </div>
    </SongsContextProvider>
  );
}

export default App;
