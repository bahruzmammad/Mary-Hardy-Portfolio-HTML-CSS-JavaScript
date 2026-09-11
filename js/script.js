function init() {
  // Mobil menyu
  const menuButton = document.getElementById("menu-button");
  const navigationLinks = document.getElementById("navigation-links");

  if (menuButton && navigationLinks) {
    const menuButtonIcon = menuButton.querySelector("i");

    menuButton.addEventListener("click", () => {
      navigationLinks.classList.toggle("open");

      const isOpen = navigationLinks.classList.contains("open");

      menuButtonIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-line",
      );
    });

    navigationLinks.addEventListener("click", () => {
      navigationLinks.classList.remove("open");
      menuButtonIcon.setAttribute("class", "ri-menu-line");
    });
  }

  // Scroll animasiyaları
  const scrollRevealOptions = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal(".hero__image img", {
      ...scrollRevealOptions,
      origin: "right",
    });

    ScrollReveal().reveal(".hero__greeting", {
      ...scrollRevealOptions,
      delay: 500,
    });

    ScrollReveal().reveal(".hero__title", {
      ...scrollRevealOptions,
      delay: 1000,
    });

    ScrollReveal().reveal(".hero__subtitle", {
      ...scrollRevealOptions,
      delay: 1500,
    });

    ScrollReveal().reveal(".hero__description", {
      ...scrollRevealOptions,
      delay: 2000,
    });

    ScrollReveal().reveal(".hero__actions", {
      ...scrollRevealOptions,
      delay: 2500,
    });

    ScrollReveal().reveal(".about__image", {
      ...scrollRevealOptions,
      origin: "left",
    });

    ScrollReveal().reveal(".about__content .section-subheader", {
      ...scrollRevealOptions,
      delay: 500,
    });

    ScrollReveal().reveal(".about__content .section-header", {
      ...scrollRevealOptions,
      delay: 1000,
    });

    ScrollReveal().reveal(".about__description", {
      ...scrollRevealOptions,
      delay: 1500,
    });

    ScrollReveal().reveal(".about__details", {
      ...scrollRevealOptions,
      delay: 2000,
    });

    ScrollReveal().reveal(".about__interests-title", {
      ...scrollRevealOptions,
      delay: 2500,
    });

    ScrollReveal().reveal(".about__interest", {
      ...scrollRevealOptions,
      delay: 3000,
      interval: 500,
    });

    ScrollReveal().reveal(".expertise__card", {
      ...scrollRevealOptions,
      interval: 300,
    });

    ScrollReveal().reveal(".journey__column", {
      ...scrollRevealOptions,
      interval: 500,
    });

    ScrollReveal().reveal(".services__card", {
      ...scrollRevealOptions,
      interval: 300,
    });

    ScrollReveal().reveal(".contact-banner__content .section-header", {
      ...scrollRevealOptions,
    });

    ScrollReveal().reveal(".contact-banner__content p", {
      ...scrollRevealOptions,
      delay: 500,
    });

    ScrollReveal().reveal(".contact-banner__content .button", {
      ...scrollRevealOptions,
      delay: 1000,
    });

    ScrollReveal().reveal(".contact-banner__image", {
      ...scrollRevealOptions,
      origin: "right",
    });

    ScrollReveal().reveal(".blog__card", {
      ...scrollRevealOptions,
      interval: 500,
    });
  }

  // Portfolio filtri
  if (
    typeof mixitup !== "undefined" &&
    document.querySelector(".portfolio__grid")
  ) {
    mixitup(".portfolio__grid");
  }

  // Müştəri slideri
  if (
    typeof Swiper !== "undefined" &&
    document.querySelector(".clients__slider")
  ) {
    new Swiper(".clients__slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      },
    });
  }
}

document.addEventListener("DOMContentLoaded", init);
