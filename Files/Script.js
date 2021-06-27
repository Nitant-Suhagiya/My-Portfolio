var Box = document.getElementById("box");

var Vis = document.getElementById("btn1");
var Tic = document.getElementById("btn2");
var OS = document.getElementById("btn3");

var Close = document.querySelector(".close");

let openBox = function () {
  Box.style.display = "block";
}
let closeBox = function () {
  Box.style.display = "none";
  document.querySelector(".Boxcontent1").style.display = "none";
  document.querySelector(".Boxcontent2").style.display = "none";
  document.querySelector(".Boxcontent3").style.display = "none";
}

Close.onclick = function () {
  closeBox()
}

window.onclick = function (event) {
  if (event.target == Box) {
    closeBox()
  }
}

Vis.onclick = _ => {
  openBox()
  document.querySelector(".Boxcontent1").style.display = "block"

}

Tic.onclick = _ => {
  openBox()
  document.querySelector(".Boxcontent2").style.display = "block"

}

OS.onclick = _ => {
  openBox()
  document.querySelector(".Boxcontent3").style.display = "block"

}