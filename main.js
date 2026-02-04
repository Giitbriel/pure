document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     GALERIA – LIGHTBOX
  ========================== */

  const images = document.querySelectorAll(".gallery-grid img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.classList.add("active");
      lightboxImg.src = img.src;
      document.body.style.overflow = "hidden";
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
    lightboxImg.src = "";
    document.body.style.overflow = "";
  });

  lightboxImg.addEventListener("click", e => e.stopPropagation());

  /* =========================
     REVEAL ON SCROLL
  ========================== */

  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.05 });

  reveals.forEach(el => observer.observe(el));

  // ✅ druga sekcja od razu pokazana
  if (reveals[1]) reveals[1].classList.add("active");

  /* =========================
     SWIPER – GALERIA
  ========================== */

  const gallerySwiper = new Swiper(".gallery-wrapper", {
    slidesPerView: 1.2,
    spaceBetween: 20,
    centeredSlides: true,
    grabCursor: true,
    loop: false,
    pagination: { el: ".swiper-pagination", clickable: true },
    breakpoints: {
      0:    { slidesPerView: 2.2, centeredSlides: true },
      600:  { slidesPerView: 2.2, centeredSlides: true },
      768:  { slidesPerView: 4.2, centeredSlides: false },
      1024: { slidesPerView: 4,   centeredSlides: false }
    },
    observer: true,       // obserwuje zmiany DOM
    observeParents: true  // obserwuje zmiany rodziców
  });

  // LIGHTBOX dla slidera
  document.querySelectorAll(".swiper-slide img").forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

});
