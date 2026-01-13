/**
 * Challenge: Maze Solver
 * 
 * Given a 2D grid representing a maze, find the minimum number of steps
 * to reach from the start 'S' to the end 'E', while avoiding walls '#'.
 * You can move up, down, left, or right.
 * 
 * Return -1 if there is no path from start to end.
 * 
 * Example:
 * [
 *   ['S', '.', '.', '#'],
 *   ['#', '#', '.', '#'],
 *   ['.', '.', '.', '.'],
 *   ['#', '#', '#', 'E']
 * ]
 * 
 * Expected output: 6
 */

function solveMaze(maze: string[][]): number {
  // TODO: Implement your solution here
  return -1;
}

// Test cases
function runTests() {
  const test1 = [
    ['S', '.', '.', '#'],
    ['#', '#', '.', '#'],
    ['.', '.', '.', '.'],
    ['#', '#', '#', 'E']
  ];
  
  const test2 = [
    ['S', '.', '.'],
    ['.', '#', '.'],
    ['.', '.', 'E']
  ];
  
  const test3 = [
    ['S', '#', '.'],
    ['.', '#', '.'],
    ['.', '#', 'E']
  ];
  
  const test4 = [
    ['S', '.'],
    ['.', 'E']
  ];
  
  const test5 = [
    ['S', 'E']
  ];

  console.log('Test 1 - Complex maze:');
  console.log('Expected: 6, Got:', solveMaze(test1));
  console.log();
  
  console.log('Test 2 - Simple path:');
  console.log('Expected: 4, Got:', solveMaze(test2));
  console.log();
  
  console.log('Test 3 - No path (blocked):');
  console.log('Expected: -1, Got:', solveMaze(test3));
  console.log();
  
  console.log('Test 4 - Short path:');
  console.log('Expected: 2, Got:', solveMaze(test4));
  console.log();
  
  console.log('Test 5 - Adjacent start and end:');
  console.log('Expected: 1, Got:', solveMaze(test5));
}

runTests();

export {};
