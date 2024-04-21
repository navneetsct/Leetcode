/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    const temp = first;

  const result = encoded.map(curval => first ^= curval);
  result.unshift(temp);

[
