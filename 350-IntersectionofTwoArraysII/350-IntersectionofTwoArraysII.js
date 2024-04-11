 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
      let obj1={}
    let res=[]
    for(let num of nums1){
        obj1[num]=(obj1[num]||0)+1
    }
    for(let num of nums2){
        if(obj1[num]){
            res.push(num)
            obj1[num]--
        }
    }
    return res
};
[
