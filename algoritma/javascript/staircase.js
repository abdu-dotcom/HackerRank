function stairCase(n) {
    // membuat baris baru
    let kres = "";
    let space = "";
    for (let i = n; i >= 1; i--) {
        kres += "#";
        for (let k = 1; k < i; k++) {
            space += " ";
        }
        space += kres;
        console.log(space);
        space = "";
    }
};

stairCase(6);