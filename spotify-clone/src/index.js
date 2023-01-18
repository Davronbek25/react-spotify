let eminem = [];
let billie = [];
let rihanna = [];
let songs = [];

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "fa8f048e48msh85f2395b701a8e0p1fd1f9jsn4284c7f85337",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

window.onload = () => {
  const cardsMaker = (songs) => {
    const songIdStored = localStorage.getItem("songId");
    const prevSong = songs.forEach((artist) =>
      artist.find((song) => song.id === parseInt(songIdStored))
    );
    if(songIdStored && prevSong) {
      setPlayedBtm(prevSong)
    }else {
      setPlayedBtm(songs[0][0])
    }
  };

  let songsStored = JSON.parse(window.localStorage.getItem("songsStored"));
  if (songsStored) {
    cardsMaker(songsStored);
  } else {
    const fetchEminem = fetch(
      "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem",
      options
    ).then((res) => res.json());
    const fetchBillie = fetch(
      "https://deezerdevs-deezer.p.rapidapi.com/search?q=billie%20eilish",
      options
    ).then((res) => res.json());
    const fetchRihanna = fetch(
      "https://deezerdevs-deezer.p.rapidapi.com/search?q=rihanna",
      options
    ).then((res) => res.json());

    Promise.all([fetchEminem, fetchBillie, fetchRihanna])
      .then((res) => {
        console.log(res);
        console.log(res[0].data);
        console.log(res[1].data);
        console.log(res[2].data);
        eminem = res[0].data;
        billie = res[1].data;
        rihanna = res[2].data;
        songs = [eminem, billie, rihanna];
        if (!res[0].data || !res[1].data || !res[2].data) {
          window.location.reload();
          console.log("hey");
        } else {
          window.localStorage.setItem("songsStored", JSON.stringify(songs));
          cardsMaker(songs);
        }
      })
      .catch((err) => console.log(err));
  }
};
