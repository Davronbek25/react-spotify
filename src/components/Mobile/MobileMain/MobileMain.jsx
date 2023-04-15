import { useContext, useRef } from 'react'
import { SongsContext } from '../../../context/SongsContextProvider'
import MobileMainfirst from './MobileMainfirst'
import MobileMainSecond from './MobileMainSecond'

const MobileMain = () => {
  let songsContext = useContext(SongsContext)
  let songs = songsContext[0]
  return (
    <div>
      {songs.length > 1 && <MobileMainfirst songs={songs}/>}
      {songs.length > 1 && <MobileMainSecond/>}
    </div>
  )
}

export default MobileMain