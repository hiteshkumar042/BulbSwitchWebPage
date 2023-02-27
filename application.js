let btn = document.getElementById("toggle");
let bulb = document.getElementById("bulb");
btn.addEventListener("click", toggleBulb);

function toggleBulb() {
  if (btn.textContent.includes("On")) {
    btn.textContent = "Turn Off";
    bulb.src = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
  } else {
    bulb.src = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
    btn.textContent = "Turn On";
  }
}


