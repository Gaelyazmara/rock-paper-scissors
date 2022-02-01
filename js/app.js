
/// variables 
const jugada = ["piedra","papel","tijera"]

let computerContador = 0
let playerContador = 0



for(let i=0;i<5;i++){
    game ()
    }


//Condiciones
function game () {
    let playerSelection = PlayerPlay ();
        console.log (`El jugador ha elejido : ${playerSelection}`)
    let computerSelection = computerPlay ();
        console.log (`El ordenador ha elejido : ${computerSelection}`)



    
    if (playerSelection === "piedra"){
        if (computerSelection === "piedra") {
            console.log ("Ha habido un empate")
        } else if (computerSelection === "papel") {
            console.log ("El ordenador gana esta ronda!")
            return computerContador++
        } else if (computerSelection === "tijera") {
            console.log ("El jugador gana esta ronda!")
            return playerContador++ 
        }
    }
    else if (playerSelection === "papel"){
        if (computerSelection === "piedra") {
            console.log ("El jugador gana esta ronda!")
            return playerContador++ 
        } else if (computerSelection === "papel") {
            console.log ("Ha habido un empate")
        } else if (computerSelection === "tijera") {
            console.log ("El ordenador gana esta ronda!")
            return computerContador++
            }
    }
    else if (playerSelection === "tijera"){
        if (computerSelection === "piedra") {
            console.log ("El ordenador gana esta ronda!")
            return computerContador++
        } else if (computerSelection === "papel") {
            console.log ("El jugador gana esta ronda!")
            return playerContador++ 
        } else if (computerSelection === "tijera") {
                console.log ("Ha habido un empate")
        }        
}


}


console.log (`El ordenador tiene ${playerContador} puntos`)
console.log (`El jugador tiene ${computerContador} puntos`)

if (playerContador === computerContador) {
    console.log ("La partida a acabado en empate")
} else if (playerContador <= computerContador) {
    console.log ("El Ordenador ha ganado esta partida")
} else if (playerContador >= computerContador) {
    console.log ("El jugador ha ganado esta partida")
}

// Seleccion aleatoria Computer
function computerPlay () {
    let random = Math.floor(Math.random() * jugada.length);
    random = jugada[random];
    alert (`El ordenado ha elejido ${random}`)
    return random;
}

//Seleccion a traves del Prompt del Player
function PlayerPlay () {
    let respuesta = prompt ("¿Piedra, papel o tijera? ")  
    let respuestaAMinusculas = respuesta.toLocaleLowerCase ()
    return respuestaAMinusculas
}



