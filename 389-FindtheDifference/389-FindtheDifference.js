 */
var findTheDifference = function(s, t) {
    const set1=s.split('').sort();
    const set2=t.split('').sort();

    for(let i=0;i<set2.length;i++){
        if(set1[i]!==set2[i]){
            return set2[i]
        }
    }
    // console.log(set1)
    // console.log(set2)
};
"
