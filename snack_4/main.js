let letters = ["a", "b", "c"];
let numbers = [1, 2, 3];



function merge(array1, array2){

    let mergedArray = [];

    array1.forEach((element, index) => {
        mergedArray.push(element);
        mergedArray.push(array2[index]);
    });

    return mergedArray;
}

console.log(merge(letters, numbers));





