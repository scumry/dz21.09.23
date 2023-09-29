//#1

function maxAndMin(arr) {
    return Math.max(...ar) + " " + Math.min(...arr);
}
console.log("First task: " + maxAndMun([2, 3, 6, 8]));


//#2

function isSquare(number) {
    let a = 0;
    let b = 0;

    if (number < 0) {
        return false;
    }

    for (let i = 0; i <= number; i++) {
        if (a * b == number) {
            return true;
        }
        else if (a == number || b == number) {
            return false;
        }
        else {
            a++;
            b++;
        }
        
    }
}
console.log("Second task: " + isSquare(-1));

//#3

function filterStrings(arr) {
    const arrRes = [];
    
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i].length == 4) {
            arrRes.push(arr[i]);
        }
    }
    return arrRes;
}
console.log("Third task: " + filterStrings(["Dima", "Nikita", "Alexandr", "Egor"]))