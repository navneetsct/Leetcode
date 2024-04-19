/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
   const arr=[...new Set(nums)]
   arr.sort((a,b)=>a-b);
    
    if(arr.length>=3){
        return arr[arr.length-3]
    }else{
        return arr[arr.length-1]
    }
};
[
