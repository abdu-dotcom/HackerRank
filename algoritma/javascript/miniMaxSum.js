function miniMaxSum(arr) {
    let arraySum = [];
    for (let i = 0; i < arr.length; i++) {
        let array = [];
        for (let j = 0; j < arr.length; j++) {
            array.push(arr[j]);
        }
        array.splice(i, 1);
        arraySum.push(array.reduce((a, b) => a + b, 0));
    }
    console.log(Math.min(...arraySum) + " " + Math.max(...arraySum));
};

miniMaxSum([1, 2, 3, 4, 5]);