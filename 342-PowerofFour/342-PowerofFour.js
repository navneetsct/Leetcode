/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    let i=2;
    for(let i=0;i<32;i++){
        let out=Math.pow(4,i)
        if(out==n){
            return true
        }
    }
    return false
};
1
