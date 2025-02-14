document.addEventListener("DOMContentLoaded", function () {
  // 1. 헤더 HTML을 먼저 로드
  fetch("./fragmentFooter/fragmentFooter1.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;

      // 2. 헤더가 로드된 후, fragmentFooter.js 실행
      let script = document.createElement("script");
      script.src = "./fragmentFooterScript/fragmentFooter1.js";
      script.defer = true;
      document.body.appendChild(script);

      // (헤더가 로드된 후 실행)
      script.onload = function () {
        const popups = document.querySelectorAll(".popup");
        const openPopupLinks = document.querySelectorAll(".open-popup");
        const closePopupButtons = document.querySelectorAll(".close-popup");

        if (popups && openPopupLinks && closePopupButtons) {
          // 팝업 열기
          openPopupLinks.forEach((link) => {
            link.addEventListener("click", function (event) {
              event.preventDefault();
              const popupId = this.getAttribute("data-popup");
              document.getElementById(popupId).style.display = "block";
            });
          });

          // 팝업 닫기
          closePopupButtons.forEach((button) => {
            button.addEventListener("click", function () {
              this.closest(".popup").style.display = "none";
            });
          });

          // // 팝업 바깥 클릭 시 닫기
          // window.addEventListener("click", function (event) {
          //   popups.forEach((popup) => {
          //     if (event.target.classList.contains("popup")) {
          //       popup.style.display = "none";
          //     }
          //   });
          // });
          // 팝업 바깥 클릭 시 닫기
          popups.forEach((popup) => {
            popup.addEventListener("click", function (event) {
              if (!event.target.closest(".popup-content")) {
                popup.style.display = "none";
              }
            });
          });
        }
      };
    })
    .catch((error) => console.error("헤더 로드 실패:", error));
});
