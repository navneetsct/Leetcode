    while(nums.length){
        aliMin = Math.min(...nums);
        let index = nums.indexOf(aliMin)
        let aliRemoved = nums.splice(index, 1)[0];
        bobMin = Math.min(...nums);
        index = nums.indexOf(bobMin)
        let bobRemoved = nums.splice(index, 1)[0];
        arr.push(bobRemoved);
        arr.push(aliRemoved);
    }
    return arr;
};
[
