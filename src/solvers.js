/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = undefined;
  for ( var i = 0; i < n; i++ ) {
    var newBoard = new Board({n: n}); //make new board
    newBoard.attributes[0][i] = 1; //add starting piece
    solution = solutionChecker(newBoard, 1, [], false); //
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

var solutionChecker = function(board, row, results, isQueens) {

  var currentRow = board.attributes[row];
  var nextRow = row + 1;

  // console.log('board', board.attributes);

  if (nextRow === board.attributes.n + 1) {
    // console.log('nextRow', nextRow);
    if (Array.isArray(results) === true) {
      let arrOfBoard = [];
      for (let i = 0; i < board.attributes.n; i++) {
        arrOfBoard.push(board.attributes[i]);
        // console.log(i, arrOfBoard);
      }
      results.push(arrOfBoard);
    } else if (typeof results === 'number') {
      results++;
    }
    // console.log('results', results);
  } else {
    for (let i = 0; i < board.attributes.n; i++) { //loop thru columns
      currentRow[i] = 1; //toggle
      if (!board.hasColConflictAt(i)) { //if theres no conflict
        console.log(board);
        return solutionChecker(board, nextRow, results, isQueens); //recur on next row
      } else {
        currentRow[i] = 0;
      }
    }
  }
  return results;
};
