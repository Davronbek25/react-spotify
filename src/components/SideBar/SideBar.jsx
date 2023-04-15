import React from "react";
import SideBarSections from "./SideBarSections";

const SideBar = () => {
  return (
    <div id="sidebar" className="container side-bar d-inline-flex justify-content-center">
      <div className="row d-flex flex-column w-100 pt-4">
        <SideBarSections />
        {/* <!-- SIDE BAR BUTTONS --> */}
        <div className="col d-flex mt-5 pt-5">
          <div className="side-bar-nav mt-4 d-flex">
            <div className="d-flex mb-3 align-self-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-arrow-down-circle text-white fs-4"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                />
              </svg>
              <span className="text-white">Install App</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
