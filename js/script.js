document.querySelectorAll(".smooth").forEach((link) => {
  link.addEventListener("click", function (smooth_control) {
    smooth_control.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

const tooltip = document.querySelector(".tooltip");
const buttons = document.querySelectorAll(".button_more");

buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", (e) => {
    const message = e.target.getAttribute("data-tooltip");
    tooltip.textContent = message;
    tooltip.classList.add("show");

    const rect = e.target.getBoundingClientRect();
    tooltip.style.left = `${rect.left + rect.width / 2}px`;
    tooltip.style.top = `${rect.top - 30}px`;
  });

  btn.addEventListener("mouseleave", () => {
    tooltip.classList.remove("show");
  });
});

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("isOpen");
});

const checkBtn = document.querySelector(".left-side_btns .btn:first-child");
const resetBtn = document.querySelector(".left-side_btns .btn:last-child");
const sellBtn = document.querySelector(".sell_btn");
const sellMenuClose = document.querySelector(".sell_menu_close");
const sellMenu = document.querySelector(".sell_menu_overlay");
const sellMenuOk = document.querySelector(".sell_menu_btn_ok");

const years = document.querySelector("#years");
const months = document.querySelector("#months");
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

let timerInterval;

function updateTimerWithRandomValues() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  years.textContent = getRandomNumber(0, 100);
  months.textContent = getRandomNumber(0, 11);
  days.textContent = getRandomNumber(0, 30);
  hours.textContent = getRandomNumber(0, 23);
  minutes.textContent = getRandomNumber(0, 59);
  seconds.textContent = getRandomNumber(0, 59);

  timerInterval = setInterval(() => {
    let secs = parseInt(seconds.textContent);
    let mins = parseInt(minutes.textContent);
    let hrs = parseInt(hours.textContent);
    let dys = parseInt(days.textContent);
    let mths = parseInt(months.textContent);
    let yrs = parseInt(years.textContent);

    if (secs > 0) {
      seconds.textContent = secs - 1;
    } else {
      seconds.textContent = 59;
      if (mins > 0) {
        minutes.textContent = mins - 1;
      } else {
        minutes.textContent = 59;
        if (hrs > 0) {
          hours.textContent = hrs - 1;
        } else {
          hours.textContent = 23;
          if (dys > 0) {
            days.textContent = dys - 1;
          } else {
            days.textContent = 30;
            if (mths > 0) {
              months.textContent = mths - 1;
            } else {
              months.textContent = 11;
              if (yrs > 0) {
                years.textContent = yrs - 1;
              } else {
                clearInterval(timerInterval);
                return;
              }
            }
          }
        }
      }
    }
  }, 1000);
}
checkBtn.addEventListener("click", updateTimerWithRandomValues);

resetBtn.addEventListener("click", () => {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  years.textContent = "0";
  months.textContent = "0";
  days.textContent = "0";
  hours.textContent = "0";
  minutes.textContent = "0";
  seconds.textContent = "0";
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document
  .querySelector(".left-side_btns .btn")
  .addEventListener("click", updateTimerWithRandomValues);

sellBtn.addEventListener("click", () => {
  console.log("sellBtn");
  sellMenu.classList.add("sell_menuIsOpen");
});

sellMenuClose.addEventListener("click", () => {
  sellMenu.classList.remove("sell_menuIsOpen");
});
sellMenuOk.addEventListener("click", () => {
  sellMenu.classList.remove("sell_menuIsOpen");
});

const images = [
  "./img/predictions/Prediction_image_1.png",
  "./img/predictions/Prediction_image_2.png",
  "./img/predictions/Prediction_image_3.jpg",
  "./img/predictions/Prediction_image_4.jpg",
  "./img/predictions/Prediction_image_5.jpg",
  "./img/predictions/Prediction_image_6.jpg",
  "./img/predictions/Prediction_image_7.jpg",
  "./img/predictions/Prediction_image_8.jpg",
  "./img/predictions/Prediction_image_9.jpg",
  "./img/predictions/Prediction_image_10.jpg",
  "./img/predictions/Prediction_image_11.jpg",
  "./img/predictions/Prediction_image_12.jpg",
  "./img/predictions/Prediction_image_13.jpg",
];

const button = document.getElementById("prediction_btn");
const container = document.getElementById("predictions_image");
const container2 = document.getElementById("predictions_image2");

button.addEventListener("click", () => {
  container.innerHTML = "";
  container2.innerHTML = "";

  const randomImageIndex = Math.floor(Math.random() * images.length);
  const randomImagePath = images[randomImageIndex];

  const randomImageIndex2 = Math.floor(Math.random() * images.length);
  const randomImagePath2 = images[randomImageIndex2];

  const img = document.createElement("img");
  img.src = randomImagePath;

  const img2 = document.createElement("img");
  img2.src = randomImagePath2;

  container.appendChild(img);
  container2.appendChild(img2);
});

const button_check = document.getElementById("btn_check");

button_check.addEventListener("click", () => {
  button_check.classList.toggle("active");
});

const stop_button = document.getElementById("stop_btn");
const overlay = document.getElementById("fullscreen-overlay");

stop_button.addEventListener("click", () => {
  document.body.style.backgroundColor = "black";

  overlay.style.opacity = "1";

  setTimeout(() => {
    document.body.style.backgroundColor = "";
    overlay.style.opacity = "0";
  }, 10000);
});

const timeButton = document.getElementById("time_btn");
const moments = document.querySelectorAll(".yourTime_block .moments");
const arrows = document.querySelectorAll(".yourTime_block .arrow");

timeButton.addEventListener("click", () => {
  arrows.forEach((arrow) => {
    arrow.style.transform = "scale(0.9)";
  });

  moments.forEach((moment, index) => {
    setTimeout(() => {
      moment.classList.add("time-distortion");

      const xShift = Math.random() * 100 - 50;
      const yShift = Math.random() * 60 - 30;
      moment.style.transform = `translate(${xShift}px, ${yShift}px)`;

      setTimeout(() => {
        moment.classList.remove("time-distortion");
        moment.style.transform = "";
      }, 2000);
    }, index * 100);
  });

  setTimeout(() => {
    arrows.forEach((arrow) => {
      arrow.style.transform = "";
    });
  }, moments.length * 100 + 1000);
});
