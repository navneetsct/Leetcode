 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
        let ans = new Array(pref.length);
    ans[0] = pref[0];
    for (let i = 0; i < pref.length - 1; i++) {
        ans[i + 1] = (pref[i] ^ pref[i + 1]);
    }
    return ans;

};
[
