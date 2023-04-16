const page = document.querySelector(".page");
const road = document.querySelector(".road");
const time = document.querySelector(".time");

setTimeout(() => {
  road.setAttribute("style", "display : none");
  page.setAttribute("style", "display : block");
  console.log("3초 지남");
  return;
}, 3000);

time.innerHTML = `3초`;
let count = 2;
const countTime = setInterval(() => {
  time.innerHTML = `${count--}초`;
}, 1000);

setTimeout(() => {
  clearInterval(countTime);
  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");

  var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 24,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  const visible = function () {
    let prev = document.querySelector(".swiper-slide-prev .plus-info");
    let next = document.querySelector(".swiper-slide-next .plus-info");
    let now = document.querySelector(".swiper-slide-active .plus-info");
    prev.style.opacity = 0;
    next.style.opacity = 0;
    now.style.opacity = 100;
  };

  const nextButton = document.querySelector(".swiper-button-next");
  const prevButton = document.querySelector(".swiper-button-prev");
  nextButton.addEventListener("click", visible);
  prevButton.addEventListener("click", visible);

  let target = document.querySelector(".swiper-slide-active");
  let observer = new MutationObserver((mutations) => {
    visible();
  });
  let option = {
    attributes: true,
    childList: true,
    characterData: true,
  };
  observer.observe(target, option);

  const body = document.querySelector("body");
  const loginButton = document.querySelector(".nav__sign > button");
  const modal = document.querySelector(".modal");
  const modalFirstPage = document.querySelector(".modal .first-page");
  const modalSecondPage = document.querySelector(".modal .second-page");
  const modalCloseButton = document.querySelector(".modal__close-button");

  loginButton.addEventListener("click", () => {
    modal.setAttribute("style", "display : block");
    modalFirstPage.setAttribute("style", "display : block");
    body.setAttribute("style", "overflow-y: hidden;");
  });

  modalCloseButton.addEventListener("click", () => {
    modal.setAttribute("style", "display : none");
    body.setAttribute("style", "overflow-y: scroll;");
  });

  const inputEmail = document.querySelector(
    "div.modal__input-container > input[type=email]"
  );
  const inputEmailButton = document.querySelector(
    ".modal__email-button.long-round-button"
  );
  const secondPageEmail = document.querySelector(
    "body > section.modal > div > form > fieldset.input-mail > input[type=email]"
  );

  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  inputEmail.removeAttribute("required");
  inputEmailButton.addEventListener("click", () => {
    const userEmail = inputEmail.value;
    if (regex.test(userEmail)) {
      modalFirstPage.setAttribute("style", "display : none");
      modalSecondPage.setAttribute("style", "display : block");
      secondPageEmail.setAttribute("placeholder", userEmail);
    } else {
      userEmail.value = "";
      inputEmail.setAttribute("style", "border-color:red;");
    }
  });
}, 3000);
