// Constantes
var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];

// Datos
var myTeam = [
    {
        name: "María",
        availability: new Array(8).fill(true)
    },
    {
        name: "Pedro",
        availability: new Array(8).fill(true)
    },
    {
        name: "Esther",
        availability: new Array(8).fill(true)
    },
    {
        name: "Marcos",
        availability: new Array(8).fill(true)
    },
];

//Para ver la agenda de cada persona
let i = 0;
for (persona of myTeam) {
    console.log("Disponibilidad de " + persona.name)
    for (let i = 0; i < WORK_HOURS.length; i++) {
        let disponibilidadAleatoria = Math.random() >= 0.5;
        if (disponibilidadAleatoria === true) {
            disponibilidadAleatoria = "Si";
        } else {
            disponibilidadAleatoria = "No";
        }
        persona.availability[i] = disponibilidadAleatoria;

        console.log(WORK_HOURS[i] + " " + persona.availability[i])
    }
}
//Para buscar la disponibilidad
let disponible = 0;
for (hora in WORK_HOURS) {
    for (persona of myTeam) {
        if (persona.availability[hora] === "Si") {
            disponible = disponible + 1;
        } else if (persona.availability[hora] === "No") {
            disponible = disponible - 1;
        }
    }
    //console.log(disponible)
    if (disponible === myTeam.length) {
        console.log("Hueco encontrado en el horario: " + WORK_HOURS[hora]);
    } else {
        console.log("Lo siento. No hay hueco disponible en el equipo a las " + WORK_HOURS[hora]);
    }
    disponible = 0;
}

