var swiper = new Swiper(".slide-intro", {
  slidesPerView: 1,
  direction: "horizontal",
  autoplay: true,
  spaceBetween: 5,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".slide-studio", {
  direction: "horizontal",
  slidesPerView: "auto",
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 4000,
  spaceBetween: 5,
  pagination: {
    el: ".slide-studio .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5.5,
      spaceBetween: 30,
    },
  },
});
//Javascript
//최초 로드 시 iframe 높이값 비율에 맞게 세팅
var $videoIframe = document.getElementById("video");
var responsiveHeight = $videoIframe.offsetWidth * 0.5625;
$videoIframe.setAttribute("height", responsiveHeight);

//브라우저 리사이즈 시 iframe 높이값 비율에 맞게 세팅
window.addEventListener("resize", function () {
  responsiveHeight = $videoIframe.offsetWidth * 0.5625;
  $videoIframe.setAttribute("height", responsiveHeight);
});
