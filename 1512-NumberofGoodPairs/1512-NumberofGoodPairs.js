
    for(let i=0;i<size;i++){
    let size=nums.length;
        for(let j=i+1;j<size;j++){
            if(nums[i]===nums[j]){
                count++
            }
        }

    }
    return count;
};
[
