// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    if (matrix.length === 0) {
        return [];
    }
    let arr = matrix.reduce((acc, el, idx) => {
        if (idx % 2 == 0) {
            acc.push(...el);
            return acc;
        } else {
            acc.push(...el.reverse());
            return acc;
        }
    }, []);

    return arr;
};
