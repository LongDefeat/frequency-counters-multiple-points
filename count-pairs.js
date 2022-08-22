function countPairs(arr, num) {
    arr.sort((a, b) => a-b);
    let start = 0;
    let end = arr.length - 1;
    let count = 0;

    while(start < end){
        let findTargetNum = arr[start] + arr[end];
        if (findTargetNum === num){
            count++;
            start++;
            end--;
        } else if (findTargetNum < num){
            start++;
        } else {
            end--;
        }
    }
    return count;
}
