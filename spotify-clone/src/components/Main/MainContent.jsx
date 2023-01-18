import React from 'react'
import MainContent_I from './MainContent_I'
import MainContent_II from './MainContent_II'

const MainContent = () => {
  return (
    <div className="container-fluid g-0" id="content-container">
        <MainContent_I />
        <MainContent_II />
    </div>
  )
}

export default MainContent