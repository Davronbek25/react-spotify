import React, { useContext, useRef } from 'react'
import { SongsContext } from '../../context/SongsContextProvider';
import PortraitCard from './PortraitCard';

const MainContent_II = () => {
    let songsContext = useContext(SongsContext)
    let songs = songsContext[0]
    let titles = [
      'Episodes for you',
      'Made for you',
      'Recently played',
      'Your top mixes',
      'More like Hot Hits Italia',
      'Popular radio',
      'Playlist tutte da scoprire!',
      'Recommended radio',
      'More like Billie Eilish',
      'More like Eminem',
      'Best of artists',
      'Throwback',
      'More like Rihanna',
      'Your favorite artists',
      'Uniquely yours',
      'Based on your recent listening',
      'Mood'
    ]
    let keys = [7, 0]
    const cardsProvider = (inTitle) => {
      if(songs.length > 1) {
        let cards = []
        for (let i = 0; i < 6; i++) {
          let keyNum1 = i + 3 + inTitle
          let startNum1 = 3 + inTitle
          let keyNum2 = i + 7 + inTitle
          let startNum2 = 7 + inTitle
          cards.push(<PortraitCard song={songs[i] ? songs[i] : songs[i-3]} key={i < 3 ? keyNum1 : keyNum2} start={i < 3 ? startNum1 : startNum2}/>)
        }
        return cards
      }
    }
  return (
    <div className="container-fluid second-main">
      {titles && titles.map((title, inTitle) => (
        <div key={inTitle}>
          <h4 className={`${inTitle === 0 ? 'mt-0' : 'mt-4'}`}>{title}</h4>
          <div className="row ms-2 mt-4">
            {cardsProvider(inTitle)}
          </div>
        </div>
      ))}
    </div>
  )
}

export default MainContent_II