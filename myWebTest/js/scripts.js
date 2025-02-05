document.addEventListener("DOMContentLoaded", function () {
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
    document.querySelector(".banner h1").textContent = "Handmade Natural Soap";
    document.querySelector(".banner p").textContent =
      "Eco-friendly products for healthy skin";
    document.querySelectorAll(".product h2")[0].textContent =
      "Lavender Handmade Soap";
    document.querySelectorAll(".product h2")[1].textContent =
      "Rosemary Handmade Soap";
    document.querySelectorAll(".add-to-cart")[0].textContent = "Add to Cart";
    document.querySelectorAll(".add-to-cart")[1].textContent = "Add to Cart";
    document.querySelector("footer p").textContent =
      "© 2025 Lemon Shop. All Rights Reserved.";
  }

  // 모바일 메뉴 토글
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // 장바구니 추가 버튼 클릭 효과
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", function () {
      alert("장바구니에 추가되었습니다!");
    });
  });

  // 다크 모드 토글
  const darkModeToggle = document.querySelector(".dark-mode-toggle");
  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
});
