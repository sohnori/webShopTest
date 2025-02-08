document.addEventListener("DOMContentLoaded", function () {
  // 1. 헤더 HTML을 먼저 로드
  fetch("./fragmentMainH/fragmentMainH1.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("main-container").innerHTML = data;

      // 2. 헤더가 로드된 후, fragmentFooter.js 실행
      let script = document.createElement("script");
      script.src = "./fragmentMainH/fragmentMainH1.js";
      script.defer = true;
      document.body.appendChild(script);

      let isJumping = false;

      // (헤더가 로드된 후 실행)
      script.onload = function () {
        const character = document.querySelector(".animation-character");

        if (character) {
          // 스페이스바를 눌렀을 때 점프 기능 추가
          document.addEventListener("keydown", function (event) {
            if (event.code === "Space" && !isJumping) {
              isJumping = true;
              character.style.animation = "none"; // 기존 애니메이션 중단
              character.style.transform = "translateX(-50%) translateY(-100px)";
              setTimeout(() => {
                character.style.transform = "translateX(-50%) translateY(0)";
                setTimeout(() => {
                  character.style.animation =
                    "bounceCharacter 5s ease-in-out infinite"; // 애니메이션 복구
                  isJumping = false;
                }, 500);
              }, 500);
            }
          });

          // 클릭 시 캐릭터 색상 변경
          character.addEventListener("click", function () {
            const colors = ["red", "blue", "green", "yellow", "purple"];
            const randomColor =
              colors[Math.floor(Math.random() * colors.length)];
            character.style.backgroundColor = randomColor;
            // const images = ["character.png", "character2.png", "character3.png"];
            // const randomImage = images[Math.floor(Math.random() * images.length)];
            // character.style.backgroundImage = `url('${randomImage}')`;
          });
        }
      };
    })
    .catch((error) => console.error("헤더 로드 실패:", error));
});
