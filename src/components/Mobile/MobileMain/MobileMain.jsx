import { useContext, useRef } from 'react'
import { SongsContext } from '../../../context/SongsContextProvider'
import MobileMainSecond from './MobileMainSecond'
import MobileMainFirst from './MobileMainFirst'

const MobileMain = () => {
  let songsContext = useContext(SongsContext)
  let songs = songsContext[0]
  return (
    <div>
      {songs.length > 1 && <MobileMainFirst songs={songs}/>}
      {songs.length > 1 && <MobileMainSecond songs={songs}/>}
    </div>
  )
}

export default MobileMain