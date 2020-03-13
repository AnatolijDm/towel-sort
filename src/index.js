
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined) {
        return [];
    }
  let result = [];
  matrix.forEach(element => {
      if (matrix.indexOf(element) % 2 === 0) {
        for (let i = 0; i < element.length; i++) {
            result.push(element[i]);
        }
      }
      if (matrix.indexOf(element) % 2 === 1) {
        for (let i = element.length - 1; i >= 0 ; i--) {
            result.push(element[i]);
        }
      }
  })
  return result;
}
