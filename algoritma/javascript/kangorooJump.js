function kangaroo(x1, v1, x2, v2) {
    // Write your code here

    let jauhLompatanKangorooPertama = x1;
    let jauhLompatanKangorooKedua = x2;
    let value = "NO";

    if (x1 < x2 && v1 < v2) {
        console.log(value);
    } else {
        for (var i = 0; i < 10000; i++) {
            jauhLompatanKangorooPertama += v1;
            jauhLompatanKangorooKedua += v2;
            if (jauhLompatanKangorooPertama == jauhLompatanKangorooKedua) {
                value = "YES";
                break;
            }
            if (jauhLompatanKangorooPertama > jauhLompatanKangorooKedua) {
                break;
            }

        }
    }
    console.log(value);
}
kangaroo({
    x1: 43, // titik awal kangoroo pertama
    v1: 2, // lompatan kangoroo pertama
    x2: 70, // titik awal kangoroo kedua
    v2: 2, // lompatan kangoroo kedua
});