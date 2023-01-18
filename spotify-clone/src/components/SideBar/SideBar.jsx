import React from 'react'
import SideBarSections from './SideBarSections'

const SideBar = () => {
  return (
    <div className="container side-bar d-inline-flex justify-content-center">
        <div className="row d-flex flex-column w-100 pt-4">
            <SideBarSections />
            {/* <!-- SIDE BAR BUTTONS --> */}
            <div className="col d-flex mt-5 pt-5">
                <div className="side-bar-nav mt-4 d-flex">
                    <div className="d-flex mb-3 align-self-end">
                        <i className="fa-regular fa-circle-down fs-4 text-white"></i>
                        <span className="text-white">Install App</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar