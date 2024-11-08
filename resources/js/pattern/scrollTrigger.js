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
  tl.to(".typo01", { x: "100vw", x: -55, y: 0, duration: 4, ease: "power2.inOut" });
  tl.to(".typo02", { x: "100vw", x: 60, y: 0, duration: 5, ease: "power2.inOut" }, "-=4.5");
  // typo01 왼쪽에서 오른쪽 이동 typo02 오른쪽에서 왼쪽 이동, duration:숫자당 1초, 지속시간 ease:가속도를 더하는 효과, -=:delay를 바깥에 쓸수 있다. - 빠르게 + 느리게 = 4.5초 typo02를 4.5초 빠르게 해서 typo01과 typo02 거의 동시에 움직이도록 맞춤.
  tl.to(".typo", { gap: 0, duration: 1, delay: 2 });
  tl.to(".typo", { y: 0, top: "63%", duration: 4 });
  tl.to(".images", { alpha: 1, delay: -5 });
  tl.to(".images", { y: "0%", duration: 6, delay: -4 });
  tl.to(".typo03", { x: -70, y: 0, duration: 6 });
  tl.to(".typo04", { x: +20, y: 0, duration: 7, delay: -4 });
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

//  보류 // tl.fromTo(
//   ".txt01",
//   { y: 20, alpha: 0 }, // 시작 상태: 아래로 20px, 완전히 투명
//   { y: 0, alpha: 1, duration: 2, ease: "power1.out" } // 부드럽게 올라오며 나타남
// );
// tl.to(".txt01", { alpha: 1, duration: 5, delay: 2 });
// tl.fromTo(
//   ".txt02",
//   { y: 20, alpha: 0 }, // 시작 상태: 아래로 20px, 완전히 투명
//   { y: 0, alpha: 1, duration: 2, ease: "power1.out" } // 부드럽게 올라오며 나타남
// );
// tl.to(".txt02", { alpha: 1, duration: 5, delay: 4 });
