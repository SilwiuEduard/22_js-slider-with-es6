import people from "./data.js";

const container = document.querySelector(".slide-container");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

container.innerHTML = people
  .map((person, slideIndex) => {
    // console.log(person);
    const { img, name, job, text } = person;
    let position = "next";
    if (slideIndex === 0) {
      position = "active";
    }
    if (slideIndex === people.length - 1) {
      position = "last";
    }

    return `<article class="slide ${position}">
          <img
            src="${img}"
            class="img"
            alt="peter doe"
          />
          <h4>${name}</h4>
          <p class="title">${job}</p>
          <p class="text">
           ${text}
          </p>
          <div class="quote-icon">
            <i class="fas fa-quote-right"></i>
          </div>
        </article>`;
  })
  .join("");

const startSlider = (type) => {
  //console.log(type);
  // Check the parameter, used for line 73, to implement prev #startSlider("prev");#
  const active = document.querySelector(".active");
  const last = document.querySelector(".last");
  let next = active.nextElementSibling;
  if (!next) {
    next = container.firstElementChild;
  }

  active.classList.remove(["active"]);
  last.classList.remove(["last"]);
  next.classList.remove(["next"]);

  if (type === "prev") {
    active.classList.add("next");
    last.classList.add("active");
    next = last.previousElementSibling;
    if (!next) {
      next = container.lastElementChild;
    }
    next.classList.remove("next");
    next.classList.add("last");
    return;
  }

  active.classList.add("last");
  last.classList.add("next");
  next.classList.add("active");
};

nextBtn.addEventListener("click", () => {
  startSlider();
});

prevBtn.addEventListener("click", () => {
  startSlider("prev");
});
