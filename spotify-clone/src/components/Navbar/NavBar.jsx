import React, { useEffect, useRef } from 'react'
import NavbarSub from './NavbarSub'

const NavBar = () => {
  const nav = useRef()
  useEffect(() => {
    if(nav.current !== undefined ){
      window.onscroll = function () {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
          nav.current.classList.replace("transparent-bg", "nav-bg");
        } else {
          nav.current.classList.replace("nav-bg", "transparent-bg");
        }
      };
    }
  }, [nav.current])
  
  return (
    <div className="container-fluid g-0 transparent-bg" ref={nav} id="nav">
        <div className="row d-flex justify-content-between w-100 align-items-center h-100">
            <div className="col-2 braces">
                <span className="">
                <i className="fa-solid fa-caret-left"></i>
                <i className="fa-solid fa-circle-chevron-left"></i>
                </span>
                <span className="">
                <i className="fa-solid fa-caret-right"></i>
                <i className="fa-solid fa-circle-chevron-right"></i>
                </span>
            </div>
           <NavbarSub/>
        </div>
    </div>
  )
}

export default NavBar