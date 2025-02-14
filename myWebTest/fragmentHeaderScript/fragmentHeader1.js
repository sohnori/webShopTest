document.addEventListener("DOMContentLoaded", function () {
  // 1. 헤더 HTML을 먼저 로드
  fetch("./fragmentHeader/fragmentHeader1.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;

      // 2. 헤더가 로드된 후, fragmentHeader.js 실행
      let script = document.createElement("script");
      script.src = "./fragmentHeaderScript/fragmentHeader1.js";
      script.defer = true;
      document.body.appendChild(script);

      // 언어 감지 후 영어로 변환
      const userLang = navigator.language || navigator.userLanguage;
      if (!userLang.startsWith("ko")) {
        document.querySelector(".logo").textContent = "Lemon Shop";
        document.querySelector("nav .nav-links").innerHTML = `
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Cart</a></li>
          <li><a href="#">Login</a></li>
      `;
        // document.querySelector(".banner h1").textContent =
        //   "Handmade Natural Soap";
        // document.querySelector(".banner p").textContent =
        //   "Eco-friendly products for healthy skin";
        // document.querySelectorAll(".product h2")[0].textContent =
        //   "Lavender Handmade Soap";
        // document.querySelectorAll(".product h2")[1].textContent =
        //   "Rosemary Handmade Soap";
        // document.querySelectorAll(".add-to-cart")[0].textContent =
        //   "Add to Cart";
        // document.querySelectorAll(".add-to-cart")[1].textContent =
        //   "Add to Cart";
        // document.querySelector("footer p").textContent =
        //   "© 2025 Lemon Shop. All Rights Reserved.";
      }

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
