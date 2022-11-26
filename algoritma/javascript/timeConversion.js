function timeConversion(s) {
    // Write your code here
    let [hh, mm, ss] = s.slice(0, 8).split(":");
    let format = s.slice(-2);
    if (format === "AM" || hh === "12") {
        // if (Number(hh) > 12) {
        //     hh = Number(hh) - 12;
        // } else {
        hh = "00";
        // }
    } else if (format === "PM" && hh !== "12") {
        // if (hh > 12) {
        //     hh;
        // } else {
        hh = Number(hh) + 12;
        // }
    }
    console.log(`${hh}:${mm}:${ss} ${format}`);
};

timeConversion('25:05:45PM');