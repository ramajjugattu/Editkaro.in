// Filtering
const filterBtns = document.querySelectorAll(".filter-btn");
const videos = document.querySelectorAll(".video-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");
    const category = btn.dataset.category;

    videos.forEach(video => {
      if (category === "all" || video.dataset.category === category) {
        video.style.display = "block";
      } else {
        video.style.display = "none";
      }
    });
  });
});

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxVideo = document.getElementById("lightbox-video");
const closeBtn = document.querySelector(".lightbox .close");

videos.forEach(card => {
  card.addEventListener("click", () => {
    const videoSrc = card.querySelector("video").src;
    lightboxVideo.src = videoSrc;
    lightbox.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
  lightboxVideo.pause();
});
