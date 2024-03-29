import React, { useContext, useRef } from 'react'
import { SongsContext } from '../../context/SongsContextProvider';
import AlbumCard from './AlbumCard';

const MainContent_I = () => {
    let songsContext = useContext(SongsContext)
    let songs = songsContext[0]
    // console.log(songIdHandler)
    let time = new Date();
    time = time.getHours;
    let greeting = useRef()
    let sortingArr = [[0,2,1],[1,0,2]]
    if(greeting.current) {
            if (greeting.current && time > 5) {
            greeting.current.innerHTML = "Good morning";
            } else if (greeting.current && time > 12) {
            greeting.current.innerHTML = "Good afternoon";
            } else greeting.current.innerHTML = "Good evening";
    }
  return (
    <div className="container-fluid first-main mb-md-4">
        <h2 ref={greeting} className="mt-3">Good afternoon</h2>
        <div className="list-cards container ms-2 mt-4">
            <div className="row">
                {songs && songs.map((song, index) =>
                    (<>
                    <AlbumCard song={songs[sortingArr[0][index]]} key={index} start={0}/>
                    <AlbumCard song={songs[sortingArr[1][index]]} key={index + 4} start={4}/>
                    </>
                    )
                )}
            </div>
        </div>
    </div>
  )
}

export default MainContent_I