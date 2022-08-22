
function constructNote(msg, ltrs) {
    const lettersFreq = {};
    const messageFreq = {};

    // build frequency counter of letters
    for(let char of ltrs){
        lettersFreq[char] = ++lettersFreq[char] || 1;
    }

    // build frequency counter of message
    for(let char of msg){
        messageFreq[char] =++messageFreq[char] || 1;
    }

    // compare message frequency to letter frequency
    for (let char in messageFreq){
        if(!lettersFreq[char]){
            return false;
        }
        if(messageFreq[char] > lettersFreq[char]){
            return false;
        }
    }
    return true;
}
