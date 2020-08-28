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
  // var solution = undefined;
  // for ( var i = 0; i < n; i++ ) {
  //   var newBoard = new Board({n: n}); //make new board
  //   newBoard.attributes[0][i] = 1; //add starting piece
  //   solution = solutionChecker(newBoard, 1, 'array', false); //
  // }
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // return solution;

  // var solution = undefined;
  // var newBoard = new Board({n: n}); //make new board
  // solution = solutionChecker(newBoard, 0, 'array', false); //
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // return solution;

};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // var solutionCount = undefined;

  // for ( var i = 0; i < n; i++ ) {
  //   var newBoard = new Board({n: n}); //make new board
  //   newBoard.attributes[0][i] = 1; //add starting piece
  //   solutionCount = solutionChecker(newBoard, 1, 'number', false);
  // }

  var newBoard = new Board({n: n}); //make new board
  solutionCount = solutionChecker(newBoard, 0, 'number', false);



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

var solutionChecker = function(board, row, typeOfResults, isQueens) {

  var solutionArray = [];
  var solutionCount = 0;

  var checker = function(board, row) {
    // // console.log('solutionArray', solutionArray);
    if (row === board.attributes.n) {
    //   console.log('last time:', board);
    //   var tempArr = [];
    //   for (let i = 0; i < board.attributes.n; i++) {
    //     tempArr.push(board.attributes[i]);
    //   }
      solutionCount++;
      //   // console.log('solutionCOunt ', solutionCount);
      //   solutionArray.push(tempArr);
      //   // console.log('solutionArray length', solutionArray.length);
      return;
    }

    var currentRow = board.attributes[row]; //get row
    for (let i = 0; i < board.attributes.n; i++) {
      if (row < board.attributes.n) {
        board.togglePiece(row, i);
        if (!board.hasColConflictAt(i) && !board.hasRowConflictAt(row)) {
          checker(board, (row + 1));
        }
        board.togglePiece(row, i);
      }

    }
  };

  checker(board, row);

  console.log('solutionArray', solutionArray);

  if (typeOfResults === 'array') {
    return solutionArray;
  } else if (typeOfResults === 'number') {
    return solutionCount;
  }
};

