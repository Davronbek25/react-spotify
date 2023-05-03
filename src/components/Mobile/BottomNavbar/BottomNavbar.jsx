import React from "react";

const BottomNavbar = () => {
  return (
    <div className="container" id="bottomNavbar">
      <div className="row d-flex justify-content-between">
        <div className="col active text-center">
          <img src="./imgs/home_spotify.png" alt="" height="21px" />
          <p className="text-white align-self-end">Home</p>
        </div>
        <div className="col text-center">
          <img src="./imgs/spotify_search.png" alt="" height="21px" />
          <p className="text-white align-self-end">Search</p>
        </div>
        <div className="col text-center">
          <img src="./imgs/spotify_library.png" alt="" height="21px" />
          <p className="text-white align-self-end">Your Library</p>
        </div>
        <div className="col text-center">
          <img src="./imgs/Spotify_Lo.png" alt="" height="21px" />
          <p className="text-white align-self-end">Get App</p>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
