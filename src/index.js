const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

left.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);
left.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
);

right.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);
right.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);

btnLeft.addEventListener("click", () => {
  window.alert(
    "My advice: To CHOOSE KIND because it makes u happy & Moreover, people will remember u when u are kind to them <3"
  );
});
btnRight.addEventListener("click", () => {
  window.alert(
    "Wow...I think you are succeeding as a kind human being!! Keep showing Kindness to people ^_^"
  );
});
