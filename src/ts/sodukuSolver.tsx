import {
  getSpaceColumn,
  getSpaceRow,
  getSpaceSquare,
} from "./retrivingFunctions";

export interface Space {
  column: number;
  row: number;
}

const allNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const checkIfNumberPresent = (selectedNumbers: string[]): string[] => {
  const numbersMissing = [];

  for (let i = 0; i < allNumbers.length; i++) {
    if (!selectedNumbers.includes(allNumbers[i])) {
      numbersMissing.push(allNumbers[i]);
    }
  }

  return numbersMissing;
};

const checkSpace = (
  space: Space,
  missingNumbers: string[],
  puzzle: string[][]
) => {
  if (puzzle[space.row][space.column] == "") {
    const column = getSpaceColumn(space, puzzle);
    const square = getSpaceSquare(space, puzzle);
    const possibleNumbersforSpace: Array<string> = [];

    for (let i = 0; i < missingNumbers.length; i++) {
      if (
        !column.includes(missingNumbers[i]) &&
        !square.includes(missingNumbers[i])
      ) {
        possibleNumbersforSpace.push(missingNumbers[i]);
      }
    }

    if (possibleNumbersforSpace.length == 1) {
      puzzle[space.row][space.column] = possibleNumbersforSpace[0];
    }
  }
};

const checkNumber = (
  missingNumbers: string[],
  puzzle: string[][],
  rowNumber: number
) => {
  missingNumbers.forEach((number) => {
    const possibleSpaceForNumber: Array<Space> = [];
    for (let i = 0; i < puzzle.length; i++) {
      let space = { row: rowNumber, column: i };
      if (puzzle[space.row][space.column] == "") {
        const column = getSpaceColumn(space, puzzle);
        const square = getSpaceSquare(space, puzzle);
        const row = getSpaceRow(space, puzzle);
        if (
          !column.includes(number) &&
          !square.includes(number) &&
          !row.includes(number)
        ) {
          possibleSpaceForNumber.push(space);
        }
      }
    }
    if (possibleSpaceForNumber.length == 1) {
      puzzle[possibleSpaceForNumber[0].row][possibleSpaceForNumber[0].column] =
        number;
    }
  });
};

export const solvePuzzle = (inputPuzzle: string[][]) => {
  while (
    inputPuzzle[0].includes("") ||
    inputPuzzle[1].includes("") ||
    inputPuzzle[2].includes("") ||
    inputPuzzle[3].includes("") ||
    inputPuzzle[4].includes("") ||
    inputPuzzle[5].includes("") ||
    inputPuzzle[6].includes("") ||
    inputPuzzle[7].includes("") ||
    inputPuzzle[8].includes("")
  ) {
    for (let i = 0; i < inputPuzzle.length; i++) {
      const missingNumbers = checkIfNumberPresent(inputPuzzle[i]);
      checkNumber(missingNumbers, inputPuzzle, i);
      for (let j = 0; j < inputPuzzle[i].length; j++) {
        let space: Space = { row: i, column: j };
        checkSpace(space, missingNumbers, inputPuzzle);
      }
    }
  }
  return inputPuzzle;
};
