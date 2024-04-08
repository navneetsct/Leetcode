var maxPower = function(s) {
    let len=1;
    let max=1;
        for(let i=0;i<s.length;i++){
            if(s[i]===s[i+1]){
                len++;
            }else{
                max=Math.max(max,len)
                len=1;
            }
        }
        return max;
};
"
