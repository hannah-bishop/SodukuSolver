import { Space } from "./sodukuSolver";

export const getSpaceRow = (space: Space, puzzle: string[][]): string[] => {
  return puzzle[space.row];
};

export const getSpaceColumn = (space: Space, puzzle: string[][]): string[] => {
  const column: Array<string> = [];
  puzzle.forEach((row) => column.push(row[space.column]));
  return column;
};

export const findStartingSpace = (space: Space): Space => {
  let startingSpace: Space = { row: 0, column: 0 };

  if (space.row <= 2) {
    startingSpace.row = 0;
  }
  if (space.row >= 3 && space.row <= 5) {
    startingSpace.row = 3;
  }
  if (space.row >= 6) {
    startingSpace.row = 6;
  }
  if (space.column <= 2) {
    startingSpace.column = 0;
  }
  if (space.column >= 3 && space.column <= 5) {
    startingSpace.column = 3;
  }
  if (space.column >= 6) {
    startingSpace.column = 6;
  }

  return startingSpace;
};

export const getSpaceSquare = (space: Space, puzzle: string[][]): string[] => {
  const startingSpace = findStartingSpace(space);
  const square: Array<string> = [];

  for (let i = startingSpace.row; i < startingSpace.row + 3; i++) {
    for (let j = startingSpace.column; j < startingSpace.column + 3; j++) {
      square.push(puzzle[i][j]);
    }
  }

  return square;
};
