import React from 'react'

const SideBarSections = () => {
  return (
    <div className="col" id="side-bar-icons">
        <img
        src="./imgs/Spotify_Logo_RGB_White.png"
        style={{ height: "2.5em" }}
        />
        <div className="row d-flex flex-column">
            {/* <!-- SIDE BAR SECTIONS --> */}
            <div className="col">
                <div className="d-flex">
                <img
                    src="./imgs/home_spotify.png"
                    alt=""
                    height="21px"
                />
                <span className="text-white align-self-end">Home</span>
                </div>
                <div className="d-flex">
                <img
                    src="./imgs/spotify_search.png"
                    alt=""
                    height="21px"
                />
                <span className="text-white align-self-end">Search</span>
                </div>
                <div className="d-flex">
                <img
                    src="./imgs/spotify_library.png"
                    alt=""
                    height="21px"
                />
                <span className="text-white align-self-end">
                    Your Library
                </span>
                </div>
                <div className="d-flex">
                <img
                    src="./imgs/create-playlist.png"
                    alt=""
                    height="25px"
                />
                <span className="text-white">Create Playlist</span>
                </div>
                <div className="d-flex">
                <img
                    src="./imgs/liked-songs.png"
                    alt=""
                    height="25px"
                />
                <span className="text-white">Liked Songs</span>
                </div>
                <hr className="text-white-50" />
            </div>
        </div>
    </div>
  )
}

export default SideBarSections