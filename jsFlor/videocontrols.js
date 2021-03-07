var video = document.getElementById("video1");
var botonPlay = document.getElementById("play");

function playVideo() {
  if (video.paused) {
    video.play();
    botonPlay.innerHTML = "<span class='icon-pause'></span>";
  } else {
    video.pause();
    botonPlay.innerHTML = "<span class='icon-play'></span>";
  }
}

function stopVideo() {
  video.pause();
  video.currentTime = 0;
  botonPlay.innerHTML = "<span class='icon-play'></span>";
}

function saltarVideo(fotogramas) {
  video.currentTime += fotogramas;
}
