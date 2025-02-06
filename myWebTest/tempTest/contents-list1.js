function initializeProductPage() {
  console.log("Initializing product page...");

  const buttons = document.querySelectorAll(".filter-btn");
  const allProducts = document.querySelectorAll(".product");
  const hiddenProducts = document.querySelector(".hidden-products");
  const showMoreButton = document.getElementById("show-more");

  if (!buttons.length || !allProducts.length || !showMoreButton) {
    console.warn("필요한 요소가 없습니다. 스크립트 실행 중단.");
    return;
  }

  let isMoreExpanded = false;

  // 기본 상태 설정: 숨겨진 제품을 숨김
  hiddenProducts.style.display = "none";

  // 카테고리 필터링 기능
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");

      if (category === "all") {
        allProducts.forEach((product) => (product.style.display = "block"));
        hiddenProducts.style.display = isMoreExpanded ? "grid" : "none";
        showMoreButton.style.display = "block";
      } else {
        allProducts.forEach((product) => {
          if (product.getAttribute("data-category") === category) {
            product.style.display = "block";
          } else {
            product.style.display = "none";
          }
        });

        hiddenProducts.style.display = "grid";
        showMoreButton.style.display = "none";
      }

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
    isMoreExpanded = !isMoreExpanded;
  });
}

// `DOMContentLoaded` 이벤트 대신 직접 실행
document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {
    initializeProductPage();
  }
});
