function plusMinus(arr) {
    // Write your code here
    let n = arr.length;
    let positifValue = 0;
    let negatifValue = 0;
    let zero = 0;

    let Propotion = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negatifValue++;
        } else if (arr[i] > 0) {
            positifValue++;
        } else {
            zero++;
        }
    }
    let positifPropotion = (positifValue / n);
    let negatifPropotion = (negatifValue / n);
    let zeroPropotion = (zero / n);
    Propotion.push(positifPropotion);
    Propotion.push(negatifPropotion);
    Propotion.push(zeroPropotion);

    for (let i = 0; i < Propotion.length; i++) {
        return Propotion[i];
    }
}

plusMinus([-4, 3, -9, 0, 4, 1]);