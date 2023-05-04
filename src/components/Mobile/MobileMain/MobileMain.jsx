import { useContext, useRef } from 'react'
import { SongsContext } from '../../../context/SongsContextProvider'
import MobileMainSecond from './MobileMainSecond'
import MobileMainFirst from './MobileMainFirst'
import Footer from '../../Footer/Footer'
import BottomPlayer from '../BottomPlayer/BottomPlayer'
import BottomNavbar from '../BottomNavbar/BottomNavbar'

const MobileMain = () => {
  let songsContext = useContext(SongsContext)
  let songs = songsContext[0]
  return (
    <div>
      {songs.length > 1 && <MobileMainFirst songs={songs}/>}
      {songs.length > 1 && <MobileMainSecond songs={songs}/>}
      <Footer/>
      <BottomPlayer/>
      <BottomNavbar/>
    </div>
  )
}

export default MobileMain