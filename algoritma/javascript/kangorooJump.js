function kangaroo({ x1, v1, x2, v2 }) {
    // Write your code here
    // menghitung jarak setiap lompatan kangoroo 1
    let jauhLompatanKangorooPertama = x1;
    let jauhLompatanKangorooKedua = x2;
    let langkahKangorooPertama = v1;
    let langkahKangorooKedua = v2;

    if (jauhLompatanKangorooPertama < jauhLompatanKangorooKedua && langkahKangorooPertama < langkahKangorooKedua) {
        return "NO";
    } else {
        for (let i = 0; i < Infinity; i++) {

            if (jauhLompatanKangorooPertama == jauhLompatanKangorooKedua) {
                return "YES";
                break;
            }
            if (jauhLompatanKangorooPertama > jauhLompatanKangorooKedua) {
                break;
            }
            jauhLompatanKangorooPertama += v1;
            jauhLompatanKangorooKedua += v2;
        }
    }
    return "YES";
}

kangaroo({
    x1: 0, // titik awal kangoroo pertama
    v1: 2, // lompatan kangoroo pertama
    x2: 5, // titik awal kangoroo kedua
    v2: 3, // lompatan kangoroo kedua
});