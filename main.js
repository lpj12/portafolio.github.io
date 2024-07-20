var swiper = new Swiper(".swiper", {
  effect: "cube",
  allowTouchMove: true,
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  mousewheel: false,
});
swiper.sliderMove = function (s, e) {
  console.log(s);
};
function Navigate(indx) {
  for (let i of document.querySelectorAll(".Links li"))
    i.classList.remove("activeLink");
  Array.from(document.querySelectorAll(".Links li"))[indx].classList.add(
    "activeLink"
  );
  swiper.slideTo(indx, 1000, true);
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".toggle-button");
  const navbarLinks = document.querySelector(".Links");
  const asidelook = document.querySelector(".aside");

  toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  });
  toggleButton.addEventListener("click", () => {
    asidelook.classList.toggle("active");
  });
});

// CURSOR

$(document).mousemove(function (e) {
  $(".cursor").eq(0).css({
    left: e.clientX,
    top: e.clientY,
  });
  setTimeout(function () {
    $(".cursor").eq(1).css({
      left: e.clientX,
      top: e.clientY,
    });
  }, 100);
});
