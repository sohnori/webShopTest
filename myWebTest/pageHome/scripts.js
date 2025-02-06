document.addEventListener("DOMContentLoaded", function () {
  const character = document.querySelector(".animation-character");
  const popups = document.querySelectorAll(".popup");
  const openPopupLinks = document.querySelectorAll(".open-popup");
  const closePopupButtons = document.querySelectorAll(".close-popup");
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  let isJumping = false;

  // 스페이스바를 눌렀을 때 점프 기능 추가
  document.addEventListener("keydown", function (event) {
    if (event.code === "Space" && !isJumping) {
      isJumping = true;
      character.style.animation = "none"; // 기존 애니메이션 중단
      character.style.transform = "translateX(-50%) translateY(-100px)";
      setTimeout(() => {
        character.style.transform = "translateX(-50%) translateY(0)";
        setTimeout(() => {
          character.style.animation = "bounceCharacter 5s ease-in-out infinite"; // 애니메이션 복구
          isJumping = false;
        }, 500);
      }, 500);
    }
  });

  // 클릭 시 캐릭터 색상 변경
  character.addEventListener("click", function () {
    const colors = ["red", "blue", "green", "yellow", "purple"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    character.style.backgroundColor = randomColor;
    // const images = ["character.png", "character2.png", "character3.png"];
    // const randomImage = images[Math.floor(Math.random() * images.length)];
    // character.style.backgroundImage = `url('${randomImage}')`;
  });

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

  // 햄버거 메뉴 토글 기능
  menuToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    mobileMenu.classList.toggle("active");
  });

  // 메뉴 외부 클릭 시 닫기
  document.addEventListener("click", function (event) {
    if (
      !mobileMenu.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      mobileMenu.classList.remove("active");
    }
  });
});
