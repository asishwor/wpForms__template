import "./public/css/style.css";
import "./public/css/media.css";
import { setupCounter } from "./counter.js";

// video play function
const bannerVideoPlay = () => {
  const video = document.querySelector(".banner__video video");
  const playBtn = document.querySelector(".banner__play-btn .fa-solid");
  playBtn.addEventListener("click", (e) => {
    const playBtnClass = e.target.classList;
    if (playBtnClass.contains("fa-play") && !video.ended) {
      playBtnClass.replace("fa-play", "fa-pause");
      video.play();
      video.parentNode.parentNode.classList.add("active");
      video.controls = true;
    } else {
      playBtnClass.replace("fa-pause", "fa-play");
      video.controls = false;
      video.pause();
      video.parentNode.parentNode.classList.remove("active");

    }
  });
};
console.log("first");
bannerVideoPlay();
setupCounter(document.querySelector("#counter"));
