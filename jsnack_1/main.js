//crea un array di 10 oggetti di zucchine
let zucchine = [
    {varietà: 1, peso: 10, lunghezza: 20},
    {varietà: 5, peso: 30, lunghezza: 40},
    {varietà: 4, peso: 20, lunghezza: 35},
    {varietà: 3, peso: 40, lunghezza: 20},
    {varietà: 3, peso: 20, lunghezza: 40},
    {varietà: 5, peso: 30, lunghezza: 20},
    {varietà: 2, peso: 50, lunghezza: 25},
    {varietà: 3, peso: 20, lunghezza: 15},
    {varietà: 5, peso: 10, lunghezza: 35},
    {varietà: 4, peso: 10, lunghezza: 25}
]

//calcola quanto pesano tutte le zucchine
let sum = 0;

zucchine.forEach((zucchina) => {
    let peso = zucchina.peso;

    sum += peso;
})

console.log(sum);