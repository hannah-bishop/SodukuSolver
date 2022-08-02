import { SpaceValue } from "../components/BlankSudoku/BlankSudoku";
import { Space } from "./sodukuSolver";

export const getSpaceRow = (space: Space, puzzle: SpaceValue[][]): string[] => {
  let rowValues = [];
  for (let i = 0; i < puzzle[space.row].length; i++) {
    rowValues.push(puzzle[space.row][i].value);
  }
  return rowValues;
};

export const getSpaceColumn = (
  space: Space,
  puzzle: SpaceValue[][]
): string[] => {
  const column: Array<string> = [];
  puzzle.forEach((row) => column.push(row[space.column].value));
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

export const getSpaceSquare = (
  space: Space,
  puzzle: SpaceValue[][]
): string[] => {
  const startingSpace = findStartingSpace(space);
  const square: Array<string> = [];

  for (let i = startingSpace.row; i < startingSpace.row + 3; i++) {
    for (let j = startingSpace.column; j < startingSpace.column + 3; j++) {
      square.push(puzzle[i][j].value);
    }
  }

  return square;
};
