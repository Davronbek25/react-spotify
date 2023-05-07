import { useContext, useRef } from "react";
import { SongsContext } from "../../../context/SongsContextProvider";
import MobileMainSecond from "./MobileMainSecond";
import MobileMainFirst from "./MobileMainFirst";
import Footer from "../../Footer/Footer";
import BottomPlayer from "../BottomPlayer/BottomPlayer";
import BottomNavbar from "../BottomNavbar/BottomNavbar";

const MobileMain = ({ playIconMobile, audioMobile, pBMobile, bottomNavbar, playMobile }) => {
  let songsContext = useContext(SongsContext);
  let songs = songsContext[0];
  return (
    <div>
      {songs.length > 1 && <MobileMainFirst songs={songs} />}
      {songs.length > 1 && <MobileMainSecond songs={songs} />}
      <Footer />
      {playMobile && <BottomPlayer
        playIconMobile={playIconMobile}
        audioMobile={audioMobile}
        pBMobile={pBMobile}
      />}
      <BottomNavbar bottomNavbar={bottomNavbar} />
    </div>
  );
};

export default MobileMain;
