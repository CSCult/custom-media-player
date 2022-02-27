console.log("Welcome to Rhythm");

let songIndex = 0;
let audioElement = new Audio("songs/Closer.mp3");
let masterPlay = document.getElementById("masterPlay");
let ProgressBar = document.getElementById("ProgressBar");
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let songs = [
  {
    songName: "Closer",
    filePath: "songs/Closer.mp3",
    coverPath: "images/closer.jpg",
  },
  {
    songName: "Perfect",
    filePath: "songs/Perfect.mp3",
    coverPath: "images/perfect.jpg",
  },
  {
    songName: "Stay",
    filePath: "songs/Stay.mp3",
    coverPath: "images/stay.jpg",
  },
  {
    songName: "Raanjhanaa",
    filePath: "songs/Raanjhanaa.mp3",
    coverPath: "images/Raanjhanaa.jpg",
  },
  {
    songName: "Doobey",
    filePath: "songs/Doobey.mp3",
    coverPath: "images/doobey.jpg",
  },
  {
    songName: "Woh Din",
    filePath: "songs/Woh Din.mp3",
    coverPath: "images/woh din.jpg",
  },
];

songItem.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//audioElement.play();
//handle play pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
//listen to events
audioElement.addEventListener("timeupdate", () => {
  //update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

  ProgressBar.value = progress;
});

ProgressBar.addEventListener("change", () => {
  audioElement.currentTime = (ProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
