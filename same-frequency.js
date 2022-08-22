function createFrequencyCounter(num){
    let frequencies = new Map();

    var myArr = String(num).split("").map((num)=>{
        return Number(num)
      })
      

    for (let val of num){
        let valCount = frequencies.get(val) || 0;
        frequencies.set(val, valCount + 1);
    }
    return frequencies;
}

function sameFrequency(int1, int2) {
    if (int1.length !== int2.length ) return false;
    let int1Freqs = createFrequencyCounter(int1);
    let int2Freqs = createFrequencyCounter(int2);

    for (let key of int1Freqs.keys()){
        if (int2Freqs.has(key) === false){
            return false;
        }

        if (int2Freqs.get(key) !== int1Freqs.get(key)){
            return false;
        }
    }
    return true;
}

