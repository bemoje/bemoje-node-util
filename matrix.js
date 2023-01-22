/**
 * @description -- matrix-ops.js : a javascript matrix operation library
 * @version 0.3.0
 ***** github.com/meiias  *****
 https://github.com/meIias/matrix-ops-js
 */
'use strict';

/**
 * @description _buildMatrix -- first part of creating the matrix, specifies how many rows will be in the matrix
 * @param  {int} rows -- the number of rows
 * @return {array}      returns an array with length of rows
 */
function _buildMatrix (rows) {
  var matrix = [];
  var i = 0;
  for (i; i < rows; i++) {
    matrix[i] = [];
  }
  return matrix;
}

/**
 * @description _augmentMatrix -- method to help add a row or col to the matrix
 * @param  {array} m      -- the matrix to augment
 * @param  {array} vector -- the row or column to add
 * @param  {string} type   -- specifies whether a row or col is being added
 * @return {array}        returns the matrix with the new row or col
 */
function _augmentMatrix (matrix, vector, type) {
  var m = matrix.map(function (arr) {
    return arr.slice();
  });
  var i = 0, j = 0;
  var rows = _getNumRows(m);
  var cols = _getNumCols(m);
  if (type === 'row') {
    m.push(vector);
  }
  else if (type === 'col') {
    for (i; i < rows; i++) {
      m[i].push(vector[i]);
    }
  }
  return m;
}

function _strWrapInBrackets (str) {
  return '[' + str + ']';
}

/**
 * @description _createMatrix -- creates and initializes a matrix of the specific size
 * @param  {int} rows -- num rows
 * @param  {int} cols -- num cols
 * @return {array}      return matrix of rows x cols
 */
function _createMatrix (rows, cols) {
  var matrix = _buildMatrix(rows);
  _assignValuesToMatrix(JSON.parse(JSON.stringify(matrix)), rows, cols);
  return matrix;
}

/**
 * @description _createTriangularMatrix -- method used to help build a lower or upper triangular matrix
 * @param  {array} m    -- the matrix to be converted to a triangular matrix
 * @param  {string} type -- specifies whether it will be a lower or upper triangular
 * @return {array}      returns the triangular matrix
 */
function _createTriangularMatrix (matrix, type) {
  var m = matrix.map(function (arr) {
    return arr.slice();
  });
  var i = 0, j = 0;
  var rows = _getNumRows(m);
  var cols = _getNumCols(m);
  if (rows === cols) {
    for (i; i < rows; i++) {
      for (j; j < cols; j++) {
        if (type === 'upper') {
          if (i > j) {
            m[i][j] = 0;
          }
        }
        else if (type === 'lower') {
          if (i < j) {
            m[i][j] = 0;
          }
        }
      }
      j = 0;
    }
    return m;
  }
}

/**
 * @description _arithmeticOnMatrix -- method to help and and subtract matrix values
 * @param  {array} m1 -- the first matrix
 * @param  {array} m2 -- the matrix being added to the first
 * @param  {char} op -- operator specifing + for add and - for subtract
 * @return {array}    returns the array with the added/subtraction results
 */
function _arithmeticOnMatrix (matrix1, matrix2, op) {
  var m1 = matrix1.map(function (arr) {
    return arr.slice();
  });
  var m2 = matrix2.map(function (arr) {
    return arr.slice();
  });
  var newMatrix = [];
  var size = 0;
  var rows1 = _getNumRows(m1), cols1 = _getNumCols(m1);
  var rows2 = _getNumRows(m2), cols2 = _getNumCols(m2);
  var i = 0, j = 0;
  if (rows1 === rows2 && cols1 === cols2) {
    newMatrix = _createMatrix(rows1, cols1);
    for (i; i < rows1; i++) {
      for (j; j < cols1; j++) {
        if (op === '+') {
          newMatrix[i][j] = m1[i][j] + m2[i][j];
        }
        else if (op === '-') {
          newMatrix[i][j] = m1[i][j] - m2[i][j];
        }
      }
      j = 0;
    }
    return newMatrix;
  }
}



/**
 * @description _getNumRows -- helper method to get the number of rows in the passed in matrix
 * @param  {array} m -- the matrix in question
 * @return {int}   the number of rows for that matrix
 */
function _getNumRows (matrix) {
  var m = matrix.map(function (arr) {
    return arr.slice();
  });
  var i = 0;
  var rows = 0;
  if (!m) {return;}
  for (i; i < m.length; i++) {
    rows++;
  }
  return rows;
}

/**
 * @description _getNumCols -- helper method to get num of columns in the passed in matrix
 * @param  {array} m -- the matrix
 * @return {int}   the number of columns in that matrix
 */
function _getNumCols (matrix) {
  var m = matrix.map(function (arr) {
    return arr.slice();
  });
  var i = 0;
  var cols = 0;
  if (!m) {return;}
  for (i; i < m[0].length; i++) {
    cols++;
  }
  return cols;
}

/**
 * @description _assignValuesToMatrix -- builds a 3x3 matrix full of random values if user doesn't pass in an array on create
 * @param  {array} matrix -- the array to receive more arrays as elements
 * @param  {int} rows   -- the number of rows to add
 * @param  {int} cols   -- the number of cols to add
 * @return {array}        returns the built matrix with random values between 1-10
 */
function _assignValuesToMatrix (matrix, rows, cols) {
  var i = 0, j = 0;
  for (i; i < rows; i++) {
    for (j; j < cols; j++) {
      matrix[i][j] = Math.floor((Math.random() * 9) + 1);
    }
    j = 0;
  }
}

function _isMatrixEmpty (m) {
  return m.length === 0;
}

/**
 * @description _isSymmetricMatrix -- checks if matrix === it's transpose (swapping rows and columns yields the same matrix)
 * @param  {array}  m -- the matrix to transpose and compare
 * @return {Boolean}   returns true if it is symmetric
 */
function _isSymmetricMatrix (matrix) {
  var m = matrix.map(function (arr) {
    return arr.slice();
  });
  var i = 0, j = 0;
  var rows = _getNumRows(m);
  var cols = _getNumCols(m);
  var transposedMatrix = this.transpose(m);
  var transposeRows = _getNumRows(transposedMatrix);
  var transposeCols = _getNumCols(transposedMatrix);
  if (rows !== transposeRows || cols !== transposeCols) {
    return false;
  }
  for (i; i < rows; i++) {
    for (j; j < cols; j++) {
      if (m[i][j] !== transposedMatrix[i][j]) {
        return false;
      }
    }
    j = 0;
  }
  return true;
}

/**
 * @description _isDiagonalMatrix -- checks if the only non-zero values in the matrix lie along the diagonal only
 * @param  {array}  m -- the matrix to check
 * @return {Boolean}   returns true if only non-zeros are in the diagonal of the matrix
 */
function _isDiagonalMatrix (matrix) {
  var m = matrix.map(function (arr) {
    return arr.slice();
  });
  var i = 0, j = 0;
  var rows = _getNumRows(m);
  var cols = _getNumCols(m);
  for (i; i < rows; i++) {
    for (j; j < cols; j++) {
      if (i !== j) {
        if (m[i][j] !== 0) {
          return false;
        }
      }
    }
    j = 0;
  }
  return true;
}

/**
 * @description _isZeroMatrix -- checks whether or not all values in the matrix are zero
 * @param  {array}  m -- the matrix
 * @return {Boolean}   returns true if all values in matrix are zero
 */
function _isZeroMatrix (matrix) {
  var m = matrix.map(function (arr) {
    return arr.slice();
  });
  var i = 0, j = 0;
  var rows = _getNumRows(m);
  var cols = _getNumCols(m);
  for (i; i < rows; i++) {
    for (j; j < cols; j++) {
      if (m[i][j] !== 0) {
        return false;
      }
    }
    j = 0;
  }
  return true;
}

/**
 * @description _isScalarMatrix -- checks if all values along the diagonal are equal
 * @param  {array}  m -- the matrix to check
 * @return {Boolean}   returns true if all values in the diagonal are equal
 */
function _isScalarMatrix (matrix) {
  var m = matrix.map(function (arr) {
    return arr.slice();
  });
  var i = 0, j = 0;
  var rows, cols;
  if (_isDiagonalMatrix(m)) {
    rows = _getNumRows(m);
    cols = _getNumCols(m);
    while (i < rows && j < cols) {
      if (m[i + 1] && m[j + 1]) {
        if (m[i][j] !== m[i + 1][j + 1]) {
          return false;
        }
      }
      i++;
      j++;
    }
    return true;
  }
  return false;
}

/**
 * @description _isSquareMatrix -- checks if rows === cols for matrix
 * @param  {array}  m -- the matrix
 * @return {Boolean}   returns true if same number of rows and columns
 */
function _isSquareMatrix (matrix) {
  var m = matrix.map(function (arr) {
    return arr.slice();
  });
  var rows = _getNumRows(m);
  var cols = _getNumCols(m);
  return rows === cols;
}

var mtrx = {};

/**
 * @description create -- builds a matrix out of the passed in values, or default values
 * @param  {array} input -- takes in an array of arrays from the user, if null then provide a random 3x3 matrix by default
 * @return {array}       returns the matrix
 */
mtrx.create = function (input) {
  var matrix = input;
  if (!input) {
    matrix = _buildMatrix(3);
    _assignValuesToMatrix(matrix, 3, 3);
  }
  return matrix;
};

/**
 * @description identity -- returns the identity matrix of the passed in matrix
 * @param  {array} m -- the matrix passed in
 * @return {array}   return the identity matrix of the passed in matrix
 */
mtrx.identity = function (matrix) {
  var m = matrix.map(function (arr) {
    return arr.slice();
  });
  var i = 0, j = 0;
  var rows,
    cols;
  if (_isSquareMatrix(m)) {
    rows = cols = _getNumRows(m);
    for (i; i < rows; i++) {
      for (j; j < cols; j++) {
        if (i === j) {
          m[i][j] = 1;
        }
        else {
          m[i][j] = 0;
        }
      }
      j = 0;
    }
    return m;
  }
};

/**
 * @description Scalar -- multiply each value in the matrix by a number
 * @param  {int,float} s -- the number to multiply each matrix element by
 * @param  {array} m -- the matrix passed in
 * @return {array}   returns the matrix scaled by the value s
 */
mtrx.scalar = function (s, matrix) {
  var m = matrix.map(function (arr) {
    return arr.slice();
  });
  var i = 0, j = 0;
  var rows = _getNumRows(m);
  var cols = _getNumCols(m);
  for (i; i < rows; i++) {
    for (j; j < cols; j++) {
      m[i][j] *= s;
    }
    j = 0;
  }
  return m;
};

/**
 * @description swapRows -- swaps rows in a matrix
 * @param  {array} matrix -- the matrix
 * @param  {number} idxRow1 -- index of the first row to swap
 * @param  {number} idxRow2 -- index of the second row to swap
 * @param  {boolean} [inPlace=false] -- whether to perform operations on the original matrix (true) or on a clone (false)
 * @return {array} matrix
 */
mtrx.swapRows = function (matrix, idxRow1, idxRow2, inPlace = false) {
  if (!inPlace) matrix = mtrx.clone(matrix);
  const r1 = matrix[idxRow1];
  const r2 = matrix[idxRow2];
  matrix[idxRow1] = r2;
  matrix[idxRow2] = r1;
  return matrix;
};

/**
 * @description map -- map function running through each value in matrix
 * @param  {array} matrix -- the matrix
 * @param  {function} fn -- (value, rowIndex, colIndex, matrix) => {}
 * @param  {boolean} [inPlace=false] -- whether to perform operations on the original matrix (true) or on a clone (false)
 * @return {array} matrix
 */
mtrx.map = function (matrix, fn, inPlace = false) {
  if (!inPlace) matrix = mtrx.clone(matrix);
  const numRows = _getNumRows(matrix);
  const numCols = _getNumCols(matrix);
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      matrix[row][col] = fn(matrix[row][col], row, col, matrix);
    }
  }
  return matrix;
};

/**
 * @description mapRow -- map function running through each value in a given row
 * @param  {array} matrix -- the matrix
 * @param  {number} row -- row index
 * @param  {function} fn -- (value, colIndex, matrix) => {}
 * @param  {boolean} [inPlace=false] -- whether to perform operations on the original matrix (true) or on a clone (false)
 * @return {array} matrix
 */
mtrx.mapRow = function (matrix, row, fn, inPlace = false) {
  if (!inPlace) matrix = mtrx.clone(matrix);
  for (let col = 0; col < _getNumCols(matrix); col++) {
    matrix[row][col] = fn(matrix[row][col], col, matrix);
  }
  return matrix;
};

/**
 * @description mapCol -- map function running through each value in a given col
 * @param  {array} matrix -- the matrix
 * @param  {number} col -- col index
 * @param  {function} fn -- (value, rowIndex, matrix) => {}
 * @param  {boolean} [inPlace=false] -- whether to perform operations on the original matrix (true) or on a clone (false)
 * @return {array} matrix
 */
mtrx.mapCol = function (matrix, col, fn, inPlace = false) {
  if (!inPlace) matrix = mtrx.clone(matrix);
  for (let row = 0; row < _getNumCols(matrix); row++) {
    matrix[row][col] = fn(matrix[row][col], row, matrix);
  }
  return matrix;
};

/**
 * @description addRowBy -- add each value in the row by a number
 * @param  {array} matrix -- the matrix passed in
 * @param  {number} row -- row index
 * @param  {number} n -- the number to add
 * @param  {boolean} [inPlace=false] -- whether to perform operations on the original matrix (true) or on a clone (false)
 * @return {array}   returns the matrix
 */
mtrx.addRowBy = function (matrix, row, n, inPlace = false) {
  return mtrx.mapRow(matrix, row, (value) => {
    return value + n;
  }, inPlace);
};

/**
 * @description subtractRowBy -- subtract each value in the row by a number
 * @param  {array} matrix -- the matrix passed in
 * @param  {number} row -- row index
 * @param  {number} n -- the number to subtract
 * @param  {boolean} [inPlace=false] -- whether to perform operations on the original matrix (true) or on a clone (false)
 * @return {array}   returns the matrix
 */
mtrx.subtractRowBy = function (matrix, row, n, inPlace = false) {
  return mtrx.mapRow(matrix, row, (value) => {
    return value - n;
  }, inPlace);
};

/**
 * @description multiplyRowBy -- multiply each value in the row by a number
 * @param  {array} matrix -- the matrix passed in
 * @param  {number} row -- row index
 * @param  {number} n -- the number to multiply each row element by
 * @param  {boolean} [inPlace=false] -- whether to perform operations on the original matrix (true) or on a clone (false)
 * @return {array}   returns the matrix
 */
mtrx.multiplyRowBy = function (matrix, row, n, inPlace = false) {
  return mtrx.mapRow(matrix, row, (value) => {
    return value * n;
  }, inPlace);
};

/**
 * @description divideRowBy -- multiply each value in the row by a number
 * @param  {array} matrix -- the matrix passed in
 * @param  {number} row -- row index
 * @param  {number} n -- the number to multiply each matrix element by
 * @param  {boolean} [inPlace=false] -- whether to perform operations on the original matrix (true) or on a clone (false)
 * @return {array}   returns the matrix
 */
mtrx.divideRowBy = function (matrix, row, n, inPlace = false) {
  return mtrx.mapRow(matrix, row, (value) => {
    return value / n;
  }, inPlace);
};

/**
 * @description addRowByAnotherRow -- add each value in the row by another row
 * @param  {array} matrix -- the matrix passed in
 * @param  {number} targetRow -- index of the row that gets changed
 * @param  {number} usingRow -- index of the row from which values to add are taken from
 * @param  {boolean} [inPlace=false] -- whether to perform operations on the original matrix (true) or on a clone (false)
 * @return {array}   returns the matrix
 */
mtrx.addRowByAnotherRow = function (matrix, targetRow, usingRow, inPlace = false) {
  return mtrx.mapRow(matrix, targetRow, (value, col) => {
    return value + matrix[usingRow][col];
  }, inPlace);
};

/**
 * @description subtractRowByAnotherRow -- subtract each value in the row by another row
 * @param  {array} matrix -- the matrix passed in
 * @param  {number} targetRow -- index of the row that gets changed
 * @param  {number} usingRow -- index of the row from which values to subtract are taken from
 * @param  {boolean} [inPlace=false] -- whether to perform operations on the original matrix (true) or on a clone (false)
 * @return {array}   returns the matrix
 */
mtrx.subtractRowByAnotherRow = function (matrix, targetRow, usingRow, inPlace = false) {
  return mtrx.mapRow(matrix, targetRow, (value, col) => {
    return value - matrix[usingRow][col];
  }, inPlace);
};

/**
 * @description multiplyRowByAnotherRow -- multiply each value in the row by another row
 * @param  {array} matrix -- the matrix passed in
 * @param  {number} targetRow -- index of the row that gets changed
 * @param  {number} usingRow -- index of the row from which values to multiply are taken from
 * @param  {boolean} [inPlace=false] -- whether to perform operations on the original matrix (true) or on a clone (false)
 * @return {array}   returns the matrix
 */
mtrx.multiplyRowByAnotherRow = function (matrix, targetRow, usingRow, inPlace = false) {
  return mtrx.mapRow(matrix, targetRow, (value, col) => {
    return value * matrix[usingRow][col];
  }, inPlace);
};

/**
 * @description divideRowByAnotherRow -- divide each value in the row by another row
 * @param  {array} matrix -- the matrix passed in
 * @param  {number} targetRow -- index of the row that gets changed
 * @param  {number} usingRow -- index of the row from which values to divide are taken from
 * @param  {boolean} [inPlace=false] -- whether to perform operations on the original matrix (true) or on a clone (false)
 * @return {array}   returns the matrix
 */
mtrx.divideRowByAnotherRow = function (matrix, targetRow, usingRow, inPlace = false) {
  return mtrx.mapRow(matrix, targetRow, (value, col) => {
    return value / matrix[usingRow][col];
  }, inPlace);
};

/**
 * @description reducedRowEchelonForm -- BUGGY DONT USE - divide each value in the row by another row
 * from pseudocode https://rosettacode.org/wiki/Reduced_row_echelon_form
 * @param  {array} matrix -- the matrix passed in
 * @param  {boolean} [inPlace=false] -- whether to perform operations on the original matrix (true) or on a clone (false)
 * @return {array}   returns the matrix
 */
mtrx.reducedRowEchelonForm = function (matrix, inPlace = false) {
  if (!inPlace) matrix = mtrx.clone(matrix);
  const steps = [{
    description: 'Original state',
    matrix: mtrx.clone(matrix)
  }];
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  let lead = 0;
  for (let r = 0; r < numRows; r++) {
    if (numCols <= lead) {
      break;
    };
    let i = r;
    while (matrix[i][lead] === 0) {
      i++;
      if (i === numRows) {
        i = r;
        lead++;
        if (numCols === lead) {
          break;
        };
      }
    }
    if (i !== r) {
      mtrx.swapRows(matrix, i, r);
      steps.push({
        description: 'Swap rows ' + Number(i + 1) + ' and ' + Number(r + 1),
        matrix: mtrx.clone(matrix)
      });
    }
    if (matrix[r][lead] !== 0) {
      const divideBy = matrix[r][lead];
      mtrx.divideRowBy(matrix, r, divideBy, true);
      steps.push({
        description: 'Divide row ' + Number(r + 1) + ' by ' + divideBy,
        matrix: mtrx.clone(matrix)
      });
    }
    for (let i = 0; i < numRows; i++) {
      if (i !== r) {
        mtrx.mapRow(matrix, i, (value, col) => {
          return value - (matrix[i][lead] * matrix[r][col]);
        }, true);
        steps.push({
          description: 'Subtract row ' + Number(i + 1) + ' by (row ' + Number(r + 1) + ' multiplied by ' + matrix[i][lead] + ')',
          matrix: mtrx.clone(matrix)
        });
      };
    }
    lead++;
  }
  return {matrix, steps};
};

/**
 * @description inverse -- WIP
 * @param  {array} m -- the matrix
 * @return {array}   returns the inverse of the passed in matrix
 */
mtrx.inverse = function (matrix) {
  var m = matrix.map(function (arr) {
    return arr.slice();
  });
  var inverseMtx = [];
  var i = 0, j = 0;
  var factor = 0, coefficient = 0;
  var rows = _getNumRows(m);
  inverseMtx = JSON.parse(JSON.stringify(m));
  inverseMtx = this.identity(inverseMtx);
  for (i; i < rows; i++) {
    factor = m[i][i];
    m[i] /= factor;
    inverseMtx[i] /= factor;
    for (j; j < rows; j++) {
      if (i === j) continue;
      coefficient = m[j][i];
      m[j] -= coefficient * m[i];
      inverseMtx[j] -= coefficient * inverseMtx[i];
    }
  }
  return inverseMtx;
};

/**
 * @description trace -- sum the matrix's diagonal
 * @param  {array} m -- matrix (array of arrays)
 * @return {int}   returns the sum of the diagonal of the matrix
 */
mtrx.trace = function (matrix) {
  var m = matrix.map(function (arr) {
    return arr.slice();
  });
  var i = 0, j = 0, tr = 0;
  var rows, cols;
  if (_isSquareMatrix(m)) {
    rows = _getNumRows(m);
    cols = _getNumCols(m);
    for (i; i < rows; i++) {
      for (j; j < cols; j++) {
        if (i === j) {
          tr += m[i][j];
        }
      }
      j = 0;
    }
    return tr;
  }
};

/**
 * @description transpose matrix -- swap rows & cols
 * @param  {array} m -- passed in array(matrix)
 * @return {array}   returns the matrix with columns and rows switched. mxn -> nxm
 */
mtrx.transpose = function (m) {
  var matrix = [];
  var i = 0, j = 0;
  var rows = _getNumRows(m);
  var cols = _getNumCols(m);
  matrix = _createMatrix(cols, rows);
  for (i; i < cols; i++) {
    matrix[i] = mtrx.getVector(m, i, 'col');
  }
  return matrix;
};

/**
 * @description matrix product -- multiply 2 matrices together
 * @param  {array} m1 -- the first of two matrices to multiply together
 * @param  {array} m2 -- the second matrix
 * @return {array}    returns the new product of matrix 1 and 2
 */
mtrx.dotProduct = function (m1, m2) {
  var i = 0, j = 0;
  var newMatrix = [];
  var rowDot = [], colDot = [];
  var rows1 = _getNumRows(m1);
  var cols1 = _getNumCols(m1);
  var rows2 = _getNumRows(m2);
  var cols2 = _getNumCols(m2);
  // mxn * nxr === mxr
  // columns of the first matrix and rows of the second matrix should be equal to get a matrix product
  if (cols1 === rows2) {
    newMatrix = _createMatrix(rows1, cols2);
  }
  else {return;}
  for (i; i < rows1; i++) {
    for (j; j < cols2; j++) {
      rowDot = this.rowVector(m1, i);
      colDot = this.columnVector(m2, j);
      newMatrix[i][j] = this.vectorDotProduct(rowDot, colDot);
    }
    j = 0;
  }
  return newMatrix;
};

/**
 * @description vectorDotProduct -- multiplies 2 vectors together, not matrices(see dotProduct method)
 * @param  {array} row -- single array of row values
 * @param  {array} col -- single array of col values
 * @return {int,float}     returns the multiplied row and column values
 */
mtrx.vectorDotProduct = function (row, col) {
  var i = 0;
  var dot = 0;
  if (row.length === col.length) {
    for (i; i < row.length; i++) {
      dot += (row[i] * col[i]);
    }
  }
  return dot;
};

/**
 * @description upperTriangular -- a matrix with all values under the diagonal being zero
 * @param  {array} m -- the matrix to have all values below diagonal become zero
 * @return {array}   returns the upper triangular matrix
 */
mtrx.upperTriangular = function (matrix) {
  var m = matrix.map(function (arr) {
    return arr.slice();
  });

  return _createTriangularMatrix(m, 'upper');
};

/**
 * @description lowerTriangular -- a matrix with all values aboce diagonal being zero
 * @param  {array} m -- the matrix to be converted to lower triangular
 * @return {array}   return the lower triangular matrix
 */
mtrx.lowerTriangular = function (matrix) {
  var m = matrix.map(function (arr) {
    return arr.slice();
  });

  return _createTriangularMatrix(m, 'lower');
};

/**
 * @description addRowToMatrix -- adds a row to the already existing matrix
 * @param {array} m   -- the matrix to be augmented
 * @param {array} row -- the new row to be added
 * @return {array} returns the newly augmented matrix
 */
mtrx.addRowToMatrix = function (matrix, row) {
  var m = matrix.map(function (arr) {
    return arr.slice();
  });

  if (row.length !== m[0].length) {return;}
  return _augmentMatrix(m, row, 'row');
};

/**
 * @description addColumnToMatrix -- adds a column to the existing matrix
 * @param {array} m  -- the passed in matrix to modify
 * @param {array} col -- the new column to be added
 * @return {array} returns the passed in matrix with a new column added
 */
mtrx.addColumnToMatrix = function (matrix, col) {
  var m = matrix.map(function (arr) {
    return arr.slice();
  });

  if (col.length !== m.length) {return;}
  return _augmentMatrix(m, col, 'col');
};

/**
 * @description rowVector -- returns a row vector based on the specified row number
 * @param  {array} m   -- the matrix whose values will be accessed
 * @param  {int} row -- the row number that the user wants(zero indexed)
 * @return {array}     return the array of the specified row
 */
mtrx.rowVector = function (matrix, row) {
  var m = matrix.map(function (arr) {
    return arr.slice();
  });

  return mtrx.getVector(m, row, 'row');
};

/**
 * @description columnVector -- returns the column specified of the matrix
 * @param  {array} m   -- the matrix being accessed
 * @param  {int} col -- the column number
 * @return {array}     returns the column array asked for
 */
mtrx.columnVector = function (matrix, col) {
  var m = matrix.map(function (arr) {
    return arr.slice();
  });

  return mtrx.getVector(m, col, 'col');
};

/**
 * @description add -- adds two matrices together
 * @param {array} m1 -- the first matrix
 * @param {array} m2  -- the second matrix to add
 * @return {array}  returns the matrix of the sum of each corresponding element
 */
mtrx.add = function (matrix1, matrix2) {
  var m1 = matrix1.map(function (arr) {
    return arr.slice();
  });
  var m2 = matrix2.map(function (arr) {
    return arr.slice();
  });
  return _arithmeticOnMatrix(m1, m2, '+');
};

/**
 * @description subtract -- subtracts two matrices
 * @param  {array} m1 -- the first array
 * @param  {array} m2 -- second array
 * @return {array}    returns the array with each corresponding element subtracted
 */
mtrx.subtract = function (matrix1, matrix2) {
  var m1 = matrix1.map(function (arr) {
    return arr.slice();
  });
  var m2 = matrix2.map(function (arr) {
    return arr.slice();
  });
  return _arithmeticOnMatrix(m1, m2, '-');
};

/**
 * @description print -- returns string representation of matrix
 * @param  {array} m -- the matrix to be printed
 * @return {string}   returns a string of the matrix with the proper newlines and columns
 */
mtrx.toString = function (matrix) {
  var m = matrix.map(function (arr) {
    return arr.slice();
  });
  var nums = '';
  var i = 0, j = 0;
  var rows = _getNumRows(m);
  var cols = _getNumCols(m);
  if (m && !_isMatrixEmpty(m)) {
    for (i; i < rows; i++) {
      for (j; j < cols; j++) {
        nums += m[i][j] + '\t';
      }
      j = 0;
      nums += '\n';
    }
    return nums;
  }
  return "empty matrix!";
};

/**
 * @description print -- prints out the array in a matrix fashion
 * @param  {array} m -- the matrix to be printed
 * @param  {string} [title] -- print a title for the matrix
 * @return {void}
 */
mtrx.print = function (matrix, title) {
  if (title) {
    console.log('\n' + title + ' \n----------------------');
  }
  console.log(mtrx.toString(matrix));
};

/**
 * @description toWolframCode -- prints out the array in a matrix fashion
 * @param  {array} m -- the matrix to be printed
 * @return {string}   returns a string of the matrix with the proper newlines and columns
 */
mtrx.toWolframCode = function (matrix) {
  return JSON.stringify(matrix).replace(/\[/g, '{').replace(/\]/g, '}');
};

/**
 * @description fromWolframCode -- turns Wolfram Alpha matrix format into a js matrix object
 * @param  {string} str -- wolfram alpha matrix code
 * @return {array}   returns a matrix
 */
mtrx.fromWolframCode = function (str) {
  return JSON.parse(str.replace(/\s/g, '').replace(/\{/g, '[').replace(/\}/g, ']'));
};

/**
 * @description toLatex -- converts matrix to LaTeX string.
 * @param  {array} m -- the matrix
 * @return {string} LaTeX stirng
 */
mtrx.toLatex = function (matrix) {
  let result = '\\begin{pmatrix}\n';
  matrix.forEach((row) => {
    result += row.map(n => n.toString()).join(' & ') + ' \\\\ \n';
  });
  result += '\\end{pmatrix}';
  return result;
};


/**
 * @description fromLatex -- turns latex matrix format into a js matrix object
 * @param  {string} str -- latex matrix
 * @return {array}   returns a matrix
 */
mtrx.fromLatex = function (str) {
  str = str.trim();
  let lines = str.split('\n');
  lines = lines.filter((line) => {
    return / \& /g.test(line) || /\\\\$/g.test(line.trim());
  });
  lines = lines.map(line => {
    return _strWrapInBrackets(
      line.trim()
        .replace(/\\\\$/g, '')
        .replace(/\&/g, ',')
        .replace(/\s/g, '')
    );
  });
  return JSON.parse(_strWrapInBrackets(lines.join(',')));
};

/**
 * @description echelonFormSolutions -- retrives the solutions
 * @param  {array} matrix -- matrix
 * @param  {array} variables -- (n x 1) column vector matrix with variable names (string) in order
 * @return {object}   returns solutions variable
 */
mtrx.fromLatex = function (matrix, variables) {

};

/**
 * @description equal -- checks if two matrices are equal
 * @param  {array} m1 -- first array
 * @param  {array} m2 -- second array to test with first
 * @return {bool}    returns true if equal, false otherwise
 */
mtrx.equal = function (matrix1, matrix2) {
  var m1 = matrix1.map(function (arr) {
    return arr.slice();
  });
  var m2 = matrix2.map(function (arr) {
    return arr.slice();
  });
  var i = 0, j = 0;
  var rows = _getNumRows(m1);
  var cols = _getNumCols(m1);
  var rows2 = _getNumRows(m2);
  var cols2 = _getNumCols(m2);
  if (rows !== rows2 || cols !== cols2) {
    return false;
  }
  for (i; i < rows; i++) {
    for (j; j < cols; j++) {
      if (m1[i][j] !== m2[i][j]) {
        return false;
      }
    }
    j = 0;
  }
  return true;
};

/**
 * @description clone -- clones the matrix
 * @param  {array} matrix -- the matrix passed in
 * @return {array}       returns the matrix
 */
mtrx.clone = function (matrix) {
  return matrix.map(function (row) {
    return row.slice();
  });
};

/**
 * @description getVector -- gets the vector of the specified row or column
 * @param  {array} m     -- the matrix to get the vector from
 * @param  {int} which -- specifies which zero indexed column or row to grab
 * @param  {string} type  -- specifies if its a column or row
 * @return {array}       returns the column or row vector, single
 */
mtrx.getVector = function (matrix, which, type) {
  var m = matrix.map(function (arr) {
    return arr.slice();
  });
  var vector = [];
  var i = 0, j = 0;
  var rows = _getNumRows(m);
  var cols = _getNumCols(m);
  if (type === 'row') {
    for (i; i < rows; i++) {
      while (i === which && j < cols) {
        vector.push(m[i][j]);
        j++;
      }
    }
  }
  else if (type === 'col') {
    for (i; i < rows; i++) {
      while (j < cols) {
        if (j === which) {
          vector.push(m[i][j]);
          break;
        }
        else {
          j++;
        }
      }
    }
  }
  return vector;
};

module.exports = mtrx;
