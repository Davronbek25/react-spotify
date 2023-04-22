import React from 'react'
import SwiperSlides from '../SwiperSlides/SwiperSlides'
import Settings from '../Settings/Settings'

const MobileMainfirst = ({songs}) => {
  const start = [0, 4]
  return (
    <div id='mobileMainFirst'>
      <Settings/>
      <h4 className='text-white ms-3'>Recently played</h4>
      <SwiperSlides songs={songs} start={start} />
    </div>
  )
}

export default MobileMainfirst