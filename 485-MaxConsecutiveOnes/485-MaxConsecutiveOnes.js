    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
        } else {
            arr.push(count);
            count = 0;
        }
    }
    arr.push(count);
    return  Math.max(...arr);
};
[
