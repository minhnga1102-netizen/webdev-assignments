const boardElement = document.getElementById('board');

//Renders the grid to the page
function render(grid) {
  boardElement.innerHTML = '';
  boardElement.style.setProperty('--cols', grid[0].length);
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      const cell = document.createElement('div');
      cell.className = grid[r][c] === 1 ? 'cell alive' : 'cell';
      boardElement.appendChild(cell);
    }
  }
}

const ROWS = 10
const COLS = 10
let grid;

function generateRandomGrid () {
  
  let grid = []
  //loop from 1-10, in each turn create new array (row)
  // add new row to the grid

  for (let i = 0; i < ROWS; i++) {
      let row = [];
      for (let j = 0; j < COLS; j++) { 
        // generate a random number btw 0-1
        // if number > 0.7 -> add 1 to row
        // else, add 0
        let change = Math.random()
        let cell = 0
        if (change > 0.7) {
          cell= 1
        }
        row.push(cell)
      }
      // add filled row to the grid
      grid.push(row)
  }
  return grid
}

function generateNextGeneration (grid) {
  let nextGeneration = [];
  for (let i =0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let cell = grid [i][j]
      let aliveNeighbors = countAliveNeighbors(i,j);
      let nextCell = 0;
      if (cell == 0 && aliveNeighbors ==3) {
        nextCell = 1
      } else if (cell == 1 && aliveNeighbors == 2) {
        nextCell = 1
      } else if (cell == 1 && aliveNeighbors == 3) {
        nextCell=1
      }
    }
  }
}

function countAliveNeighbors (row,column) {
  const rowOffsets = [-1,-1,-1,0,0,1,1,1];
  const columnOffsets = [-1,0,1,-1,1,-1,0,1]
  let alive = 0;
  for (let i = 0; i <= rowOffsets.length; i++) {
    let neighborRow = row + rowOffsets[1];
    let neighborColumn = column + columnOffsets[i]

    let rowInGrid = (neighborRow>=0) && (neighborRow<10);
    let columnInGrid = (neighborColumn>=0) &7 (neighborColumn<10);

    if (rowInGrid && columnInGrid) {
      let neighbor = grid [neighborRow][neighborColumn];
      alive += neighbor;
    }
  }
  return alive
}

grid = generateRandomGrid();
generateNextGeneration(grid);
render (grid)

