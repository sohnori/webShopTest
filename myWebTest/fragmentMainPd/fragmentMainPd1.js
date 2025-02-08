document.addEventListener("DOMContentLoaded", function () {
  // 1. 헤더 HTML을 먼저 로드
  fetch("./fragmentMainPd/fragmentMainPd1.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("main-container").innerHTML = data;

      // 2. 헤더가 로드된 후, fragmentMainP1.js 실행
      let script = document.createElement("script");
      script.src = "./fragmentMainPd/fragmentMainPd1.js";
      script.defer = true;
      document.body.appendChild(script);

      let isMoreExpanded = false; // More 버튼 상태를 추적

      // (헤더가 로드된 후 실행)
      script.onload = function () {};
    })
    .catch((error) => console.error("헤더 로드 실패:", error));
});
