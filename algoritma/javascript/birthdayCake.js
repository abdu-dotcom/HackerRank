function birthdayCakeCandles(candles) {
    let hightValue = Math.max(...candles);
    let sumCandle = candles.filter((candle) => candle == hightValue);

    console.log(sumCandle.length);
};

birthdayCakeCandles([3, 2, 1, 3]);