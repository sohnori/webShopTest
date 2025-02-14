document.addEventListener("DOMContentLoaded", function () {
  // 1. 헤더 HTML을 먼저 로드
  fetch("./fragmentMainP/fragmentMainP1.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("main-container").innerHTML = data;

      // 2. 헤더가 로드된 후, fragmentMainP1.js 실행
      let script = document.createElement("script");
      script.src = "./fragmentMainPscript/fragmentMainP1.js";
      script.defer = true;
      document.body.appendChild(script);

      let isMoreExpanded = false; // More 버튼 상태를 추적

      // (헤더가 로드된 후 실행)
      script.onload = function () {
        const buttons = document.querySelectorAll(".filter-btn");
        const allProducts = document.querySelectorAll(".product");
        const hiddenProducts = document.querySelector(".hidden-products");
        const showMoreButton = document.getElementById("show-more");
        // 기본 상태 설정: 숨겨진 제품을 숨김
        hiddenProducts.style.display = "none";

        // 카테고리 필터링 기능
        buttons.forEach((button) => {
          button.addEventListener("click", function () {
            const category = this.getAttribute("data-category");

            if (category === "all") {
              // 전체 카테고리일 때 기본 2행 4열 유지
              allProducts.forEach(
                (product) => (product.style.display = "block")
              );

              // More 버튼 상태에 따라 숨겨진 제품 유지
              hiddenProducts.style.display = isMoreExpanded ? "grid" : "none";
              showMoreButton.style.display = "block";
            } else {
              // 특정 카테고리 선택 시 모든 해당 제품 표시
              allProducts.forEach((product) => {
                if (product.getAttribute("data-category") === category) {
                  product.style.display = "block";
                } else {
                  product.style.display = "none";
                }
              });

              // More 버튼을 없애고 숨겨진 제품은 항상 보이도록 설정
              hiddenProducts.style.display = "grid";
              showMoreButton.style.display = "none";
            }

            // 활성 버튼 스타일 업데이트
            buttons.forEach((btn) => btn.classList.remove("active"));
            this.classList.add("active");
          });
        });

        // "More" 버튼 클릭 이벤트
        showMoreButton.addEventListener("click", function () {
          if (!isMoreExpanded) {
            hiddenProducts.style.display = "grid"; // 숨겨진 제품을 표시
            showMoreButton.textContent = "Show Less";
          } else {
            hiddenProducts.style.display = "none"; // 숨겨진 제품을 다시 숨김
            showMoreButton.textContent = "More";
          }
          isMoreExpanded = !isMoreExpanded; // 상태 변경
        });
      };
    })
    .catch((error) => console.error("헤더 로드 실패:", error));
});
