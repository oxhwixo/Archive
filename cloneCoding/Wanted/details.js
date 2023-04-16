var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  speed: 1000,
});

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
