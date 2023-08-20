
// You should implement your task here.

module.exports = function towelSort (matrix) {
  array = [];
  for (var i = 0; i< matrix.size(); i++){
    array = array.concat(matrix[i]);
  }
  
  return array.sort();
}
