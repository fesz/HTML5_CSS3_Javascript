function keyPressed (evento) {
  console.log(evento.key);
}
var miTextarea = document.getElementById('miTextarea');
miTextarea.addEventListener("keypress", keyPressed, false);
