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
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
    lightboxImg.src = "";
  });

  /* =========================
     CENNIK – JEDNA KARTA NARAZ
  ========================== */
/*
 const cards = document.querySelectorAll(".gallery-grid12");

cards.forEach(card => {
  card.addEventListener("click", () => {
    // jeśli kliknięta karta jest już aktywna → zamknij ją
    if (card.classList.contains("active")) {
      card.classList.remove("active");
    } else {
      // zamknij wszystkie inne karty
      cards.forEach(c => c.classList.remove("active"));
      // otwórz klikniętą kartę
      card.classList.add("active");
    }
  });
});
*/
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
if (reveals[1]) {          // drugi element w NodeList
  reveals[1].classList.add("active");
}
});
/*document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); // zapobiega domyślnej wysyłce

  // Sprawdź, czy reCAPTCHA jest zaznaczone
  const recaptchaResponse = grecaptcha.getResponse();
  if (!recaptchaResponse) {
    alert('Proszę zaznaczyć "Nie jestem robotem"');
    return;
  }

  // Wysyłka przez EmailJS
  emailjs.send('TWOJ_SERVICE_ID', 'TWOJ_TEMPLATE_ID', {
    from_name: this.name.value,
    from_email: this.email.value,
    message: this.message.value,
    'g-recaptcha-response': recaptchaResponse
  }, 'TWOJ_USER_ID')
  .then(() => {
    alert('Wiadomość wysłana!');
    this.reset();
    grecaptcha.reset(); // resetuje captcha
  }, (err) => {
    alert('Błąd wysyłki: ' + JSON.stringify(err));
  });
});*/
document.addEventListener("DOMContentLoaded", () => {
  const gallerySwiper = new Swiper(".gallery-wrapper", {
    slidesPerView: 1.2,
    spaceBetween: 20,
	centeredSlides: true,
    grabCursor: true,
    loop: false,
    breakpoints: {
      600: { slidesPerView: 2.2 },
      1024: { slidesPerView: 4 },
    },
    pagination: { el: ".swiper-pagination", clickable: true },
	 breakpoints: {
    0: {
		slidesPerView: 2.2,
      centeredSlides: true,
    },
    768: {
		slidesPerView: 4.2,
      centeredSlides: false,
    }
  }
  });

  // LIGHTBOX
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  document.querySelectorAll(".swiper-slide img").forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
    lightboxImg.src = "";
  });

  lightboxImg.addEventListener("click", e => e.stopPropagation());
});
