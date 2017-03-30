function buttonPressed(evento) {

    if (evento.toElement.id === "bt1") {
        alert("Button 1 pushed.");
    } else {
        alert("Button 2 pushed.");
    }
}
var button1 = document.getElementById('bt1');
button1.addEventListener("click", buttonPressed, false);
var button2 = document.getElementById('bt2');
button2.addEventListener("click", buttonPressed, false);
