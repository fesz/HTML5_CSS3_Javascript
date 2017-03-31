function lanza() {
  alert(tira_dados());
}

function tira_dados() {
    // Crea un numero aleatorio del tipo de dado y la cantidad que usemos
    return Math.floor(Math.random() * 6) + 1;
}
