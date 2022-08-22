function twoArrayObject(array1, array2) {
    let obj = {};
    //array1 has keys, array2 has values

    array1.forEach((el, idx)=> {
        if (array1[idx] && array2[idx]){
            obj[el] = array2[idx];
        //if not enough values, rest of keys = null
        } else if (array1[idx] && !array2[idx]){
            obj[el] = null;
        //if not enough keys, rest of values are ignored
        } else if (!array1[idx] && array2[idx]){
            return
        }
    })
    //return object created by keys and values
    return obj;   
}
