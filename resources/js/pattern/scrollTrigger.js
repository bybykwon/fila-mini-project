window.addEventListener("scroll", function () {
  // 스크롤 이벤트 리스너 등록
  const sections = document.querySelectorAll(".section"); // 모든 섹션을 가져옴

  sections.forEach(function (section) {
    // 각 섹션에 대해 반복
    let bounds = section.getBoundingClientRect(); // 섹션의 위치와 크기 정보를 가져옴
    const background = section.querySelector(".background"); // 배경 요소
    const title = section.querySelector(".title"); // 제목 요소
    const circle = section.querySelector(".circle"); // 원 요소
    const square = section.querySelector(".square"); // 사각형 요소

    if (bounds.top < window.innerHeight && bounds.bottom >= 0) {
      // 섹션이 뷰포트 내에 있을 때
      var scrolled = window.pageYOffset - section.offsetTop; // 섹션의 시작점에서 스크롤된 거리를 계산
      background.style.transform = `translateY(${scrolled * 0.8}px)`; // 제목을 스크롤 속도의 80%(빠르게)로 이동
      title.style.transform = `translateY(${scrolled * 0.3}px)`; // 배경을 스크롤 속도의 30%(느리게)로 이동
      circle.style.transform = `translate(${scrolled * 0.5}px, ${scrolled * 0.5}px)`; // circle 왼쪽에서 오른쪽으로 이동
      square.style.transform = `translate(${scrolled * -0.5}px)`; // square 오른쪽에서 왼쪽으로 이동
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".pin01",
      scrub: 3,
      start: "top center",
      end: "+=90%",
    },
  });

  tl.to(".bg", { height: "0", duration: 2 });
  tl.to(".typo01", { x: -50, y: 0, duration: 1 });
  tl.to(".typo02", { x: +50, y: 0, duration: 1 }), "-=1";

  tl.to(".typo", { gap: 0, duration: 1, delay: 2 });
  tl.to(".typo", { width: "auto", y: 0, top: "63%", duration: 4 });
  tl.fromTo(
    ".txt01",
    { y: 20, alpha: 0 }, // 시작 상태: 아래로 20px, 완전히 투명
    { y: 0, alpha: 1, duration: 2, ease: "power1.out" } // 부드럽게 올라오며 나타남
  );
  tl.to(".txt01", { alpha: 1, duration: 5, delay: 2 });
  tl.fromTo(
    ".txt02",
    { y: 20, alpha: 0 }, // 시작 상태: 아래로 20px, 완전히 투명
    { y: 0, alpha: 1, duration: 2, ease: "power1.out" } // 부드럽게 올라오며 나타남
  );
  tl.to(".txt02", { alpha: 1, duration: 5, delay: 4 });

  tl.to(".images", { alpha: 1, delay: -5 });
  tl.to(".images", { y: "0%", duration: 6, delay: -4 });
  tl.to(".typo03", { x: -50, y: 0, duration: 1 });
  tl.to(".typo04", { x: +30, y: 0, duration: 1, delay: -1 });
});

//화면전체에 적용되서 보류
// gsap.to(".story .images", {
//   scrollTrigger: {
//     trigger: ".bg",
//     start: "top top",
//     scrub: 3,
//     duration: 3,
//   },
//   width: 350,
//   height: 490,});
// // gsap.to(".story .images2", {
//   scrollTrigger: {
//     trigger: ".bg",
//     start: "top center",
//     scrub: 3,
//     duration: 3,
//   },
//   width: 350,
//   height: 490,});]

document.addEventListener("DOMContentLoaded", function () {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "about_pin01",
      scrub: 1,
      pin: "about_pin01",
      start: "top top",
      end: "+=800%",
    },
  });
  tl.to(".about_bg", { height: "-10", duration: 1 });
  tl.to(".about_typo01", { y: 0, duration: 1, delay: -1 });
  tl.to(".about_typo02", { y: 0, duration: 1, delay: -1 });
  tl.to(".about_typo span", { alpha: 0, duration: 1 });
  tl.to(".abou_typo span", { width: 0, duration: 1 });
  tl.to(".about_typo", { gap: 0, duration: 1, delay: -1 });
  tl.to(".about_typo", { width: "auto", y: 0, top: "36%", duration: 1 });
  tl.to(".about_bg02", { top: 0, duration: 1, delay: -1 });
  tl.to(".about_txt01", { alpha: 1, y: 0, duration: 1 });
  tl.to(".about_txt01", { alpha: 0, y: -40, duration: 1 });
  tl.to(".about_txt02", { alpha: 1, y: 0, duration: 1 });
  tl.to(".about_txt02", { alpha: 0, y: -40, duration: 1 });
  tl.to(".about_images", { alpha: 1, delay: -5 });
  tl.to(".about_images", { y: "-70%", duration: 6, delay: -4 });
});
