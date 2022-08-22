function createFrequencyCounter(str){
    let frequencies = new Map();

    str.split("").map((char)=>{
        return char
      })
      
    for (let char of str){
        let charCount = frequencies.get(val) || 0;
        frequencies.set(val, valCount + 1);
    }
    return frequencies;
}

function isSubsequence(str, msg) {
    let strFreqs = createFrequencyCounter(str);
    let msgFreqs = createFrequencyCounter(msg);

    for (let char of strFreqs){
        if (msgFreqs.has(char) === false){
            return false;
        } else if (msgFreqs.get(char) !== strFreqs){
            return false;
        }
    }
    return true;
}
