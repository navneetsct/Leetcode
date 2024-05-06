SubrectangleQueries.prototype.updateSubrectangle = function (row1, col1, row2, col2, newValue) 
{
    for (let i = row1; i <= row2; i++) {
        for (let j = col1; j <= col2; j++) {
            this.rectangle[i][j] = newValue;
        }
    }
};

SubrectangleQueries.prototype.getValue = function (row, col) {
    return this.rectangle[row][col];
};
[
