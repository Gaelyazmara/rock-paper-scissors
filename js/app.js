
/// variables 
const piedra = "piedra"
const papel = "papel"
const tijera = "tijera"

const jugada = [piedra,papel,tijera]

let playerSelection = PlayerPlay ();
let computerSelection = computerPlay ();



function computerPlay () {
    let random = Math.floor(Math.random() * jugada.length);
    random = jugada[random];
    return random;
}


function PlayerPlay () {
    let respuesta = prompt ("¿Que elijes?")  
    let respuestaAMinusculas = respuesta.toLocaleLowerCase ()
    return respuestaAMinusculas
}

console.log (computerSelection)
console.log (playerSelection)

