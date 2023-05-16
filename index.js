// darkmode
// let button = document.getElementById("button");
// let light = true;

// document.addEventListener("click", (e) => {
//   if (e.target.matches("#button")) {
//     document.documentElement.classList.toggle("dark");

//     button.textContent.includes("oscuro")
//       ? (button.textContent = "Activar modo light")
//       : (button.textContent = "Activar modo oscuro");
//   }
// });

let $allSections = document.querySelectorAll("section[data-header-color]"),
  $header = document.querySelector("header");

document.addEventListener("DOMContentLoaded", (e) => {
  let options = {
    root: null, //viewport
    rootMargin: "0px",
    threshold: 0.9, // porcentaje de visibilidad
  };
  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      // Each entry describes an intersection change for one observed
      // target element:
      //   entry.boundingClientRect
      //   entry.intersectionRatio
      //   entry.intersectionRect
      //   entry.isIntersecting
      //   entry.rootBounds
      //   entry.target
      //   entry.time
      if (entry.isIntersecting) {
        let $color = entry.target.getAttribute("data-header-color");
        console.log($color);
        $header.style.color = $color;
      }
    });
  };
  let observer = new IntersectionObserver(callback, options);

  $allSections.forEach((section) => {
    observer.observe(section);
  });
});
