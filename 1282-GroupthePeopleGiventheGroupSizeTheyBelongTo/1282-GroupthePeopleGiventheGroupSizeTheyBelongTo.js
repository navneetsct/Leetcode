    for (let i = 0; i < groupSizes.length; i++) {
        const temp = groupSizes[i]
        if(hash[temp]) {
            hash[temp].push(i)
        } else {
            hash[temp] = [i]
        }

        if (hash[temp].length === temp) {
            ans.push(hash[temp])
            delete hash[temp]
        }
    }

    return ans
};
[
