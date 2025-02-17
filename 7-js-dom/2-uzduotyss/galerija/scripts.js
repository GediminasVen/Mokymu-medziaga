document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slider img");
  const thumbnails = document.querySelectorAll(".thumbnails .thumbnail");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;

  function updateSlider(index) {
    slides.forEach((slide) => slide.classList.remove("active-slide"));
    thumbnails.forEach((thumb) => thumb.classList.remove("active-thumbnail"));

    slides[index].classList.add("active-slide");
    thumbnails[index].classList.add("active-thumbnail");
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
    updateSlider(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
    updateSlider(currentIndex);
  });

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
      currentIndex = index;
      updateSlider(currentIndex);
    });
  });
});
