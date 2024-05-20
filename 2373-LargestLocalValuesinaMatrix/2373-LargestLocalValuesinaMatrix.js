            for (let k = i - 1; k <= i + 1; k++) {
                for (let l = j - 1; l <= j + 1; l++) {
                    max = Math.max(max, grid[k][l]);
                }
            }
            row.push(max);
        }
        res.push(row);
    }
    return res;

};
[
