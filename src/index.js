
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  if (matrix.length == 0) return [];
  if (matrix.length == 1) return matrix[0];
  let returned = matrix.reduce((acc, item, index, arr) => {
    let part = item;
    if ((index + 2) % 2 !== 0) {
      part = item.reverse();
    };
    return acc.concat(part);
  }, []);
  return returned;
}