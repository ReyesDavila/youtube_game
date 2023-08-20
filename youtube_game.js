let div_1 = false;

function createDiv() {
  // Creamos el div
  const div = document.createElement("div");
  div.id = "div_1";
  div.style.width = "64px";
  div.style.height = "64px";
  div.style.backgroundColor = "transparent";
  div.style.borderColor = "blue";
  div.style.borderStyle = "solid";
  div.style.borderWidth = "2px";
  div.style.position = "fixed";
  div.style.zIndex = 10000;
  div.style.margin = "0px";
  div.style.padding = "0px";
  div.style.pointerEvents = "none";

  // Agregamos el div al documento
  document.body.appendChild(div);
  div_1 = div;
}

createDiv();


function ubicar()
{
const videoElement = document.querySelector("video");
videoElement.style.border="2px solid red";

videoElement.style.margin="0px";
videoElement.style.padding="0px";
const videoPosition = videoElement.getBoundingClientRect();
if(videoPosition.width==0 || videoPosition.height==0){div_1.hidden = true}else{div_1.hidden = false}

// Establecemos la posición del div
div_1.style.left = videoPosition.left + "px";
div_1.style.top = videoPosition.top + "px";

// Establecemos el ancho y el alto del div
div_1.style.width = (videoPosition.width-5)+"px";
div_1.style.height = (videoPosition.height-5) + "px";

}

ubicar();

setInterval(ubicar, 33);
