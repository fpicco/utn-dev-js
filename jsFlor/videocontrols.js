var video = document.getElementById("video1");
var botonPlay = document.getElementById("play");
var botonStop = document.getElementById("stop");
var botonForward = document.getElementById("forward");
var botonBackward = document.getElementById("backward");
video1.load();

function eventos() {
  botonPlay.addEventListener("click", playVideo);
  botonStop.addEventListener("click", stopVideo);
  botonForward.addEventListener("click", function () {
    saltarVideo(10);
  });
  botonBackward.addEventListener("click", function () {
    saltarVideo(-10);
  });

  playVideo();
  stopVideo();
  saltarVideo();
}

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
  video1.load();
  botonPlay.innerHTML = "<span class='icon-play'></span>";
}

function saltarVideo(fotogramas) {
  video.currentTime += fotogramas;
}

window.addEventListener("load", eventos);
