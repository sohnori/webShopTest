document.addEventListener("DOMContentLoaded", function () {
  // 1. 헤더 HTML을 먼저 로드
  fetch("./fragmentHeader/fragmentHeader.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;

      // 2. 헤더가 로드된 후, fragmentHeader.js 실행
      let script = document.createElement("script");
      script.src = "./fragmentHeader/fragmentHeader.js";
      script.defer = true;
      document.body.appendChild(script);

      // 3. 햄버거 메뉴 기능 활성화 (헤더가 로드된 후 실행)
      script.onload = function () {
        const menuToggle = document.querySelector(".menu-toggle");
        const mobileMenu = document.querySelector(".mobile-menu");

        if (menuToggle && mobileMenu) {
          menuToggle.addEventListener("click", function (event) {
            event.stopPropagation();
            mobileMenu.classList.toggle("active");
          });

          document.addEventListener("click", function (event) {
            if (
              !mobileMenu.contains(event.target) &&
              !menuToggle.contains(event.target)
            ) {
              mobileMenu.classList.remove("active");
            }
          });
        }
      };
    })
    .catch((error) => console.error("헤더 로드 실패:", error));
});
