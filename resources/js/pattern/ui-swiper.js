var swiper = new Swiper(".slide-intro", {
  slidesPerView: 1,
  spaceBetween: 5,
  loop: true,
  // autoplay: true,
  pagination: {
    el: ".slide-intro .swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".slide-studio", {
  slidesPerView: 1.5,
  spaceBetween: 5,
  pagination: {
    el: ".slide-studio .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
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
