//crea un array di 10 oggetti di zucchine
let zucchine = [
    {varietà: 1, peso: 10, lunghezza: 10},
    {varietà: 5, peso: 30, lunghezza: 40},
    {varietà: 4, peso: 20, lunghezza: 12},
    {varietà: 3, peso: 40, lunghezza: 20},
    {varietà: 3, peso: 20, lunghezza: 40},
    {varietà: 5, peso: 30, lunghezza: 5},
    {varietà: 2, peso: 50, lunghezza: 25},
    {varietà: 3, peso: 20, lunghezza: 2},
    {varietà: 5, peso: 10, lunghezza: 35},
    {varietà: 4, peso: 10, lunghezza: 25}
]

const zucchine_piccole = zucchine.filter((zucchina) => zucchina.lunghezza < 15)
console.log(zucchine_piccole);

const zucchine_grandi = zucchine.filter((zucchina) => zucchina.lunghezza > 15)
console.log(zucchine_grandi);

let sum = 0;

zucchine_piccole.forEach((zucchina) => {
    sum += zucchina.peso
})

zucchine_piccole.forEach((zucchina) => {
    sum += zucchina.peso
})