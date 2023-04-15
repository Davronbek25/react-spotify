import React from 'react'
import SwiperSlides from '../SwiperSlides/SwiperSlides'
import Settings from '../Settings/Settings'

const MobileMainfirst = ({songs}) => {
  return (
    <div id='mobileMainFirst'>
      <Settings/>
      <h4 className='text-white ms-2'>Recently played</h4>
      <SwiperSlides songs={songs} />
    </div>
  )
}

export default MobileMainfirst