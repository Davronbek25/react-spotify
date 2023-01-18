import React, { useContext, useRef } from 'react'
import { SongsContext } from '../../context/SongsContextProvider';
import PortraitCard from './PortraitCard';

const MainContent_II = () => {
    let songsContext = useContext(SongsContext)
    let songs = songsContext[0]
  return (
    <div className="container-fluid second-main">
        <h4 className="mt-0">Your top mixes</h4>
        <div className="row row-cols-6 ms-2 mt-4">
            {songs && songs.map((song, index) => 
            (<>
            <PortraitCard song={song} key={index + 7} start={7}/>
            <PortraitCard song={song} key={index + 11} start={11}/>
            </>)
        )}
        </div>
    </div>
  )
}

export default MainContent_II