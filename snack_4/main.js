let letters = ["a", "b", "c"];
let numbers = [1, 2, 3];



function merge(array1, array2){

    let mergedarray = [...array1, ...array2]
    console.log(mergedarray);
}

merge(letters, numbers);


