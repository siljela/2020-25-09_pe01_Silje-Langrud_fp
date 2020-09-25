btn = document.querySelector("#backtotop");

function scrollFunction() {
  const scrolledY = window.scrollY;

  if (scrolledY > 150) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

window.addEventListener("scroll", scrollFunction);
