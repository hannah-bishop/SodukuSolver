import { SpaceValue } from "../components/BlankSudoku/BlankSudoku";
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

const checkIfNumberPresent = (selectedSpaces: SpaceValue[]): string[] => {
  const numbersMissing = [];
  const selectedNumbers = [];

  for (let i = 0; i < selectedSpaces.length; i++) {
    selectedNumbers.push(selectedSpaces[i].value);
  }

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
  puzzle: SpaceValue[][]
) => {
  if (puzzle[space.row][space.column].value == "") {
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
      puzzle[space.row][space.column].value = possibleNumbersforSpace[0];
      puzzle[space.row][space.column].changed = true;
    }
  }
};

const checkNumber = (
  missingNumbers: string[],
  puzzle: SpaceValue[][],
  rowNumber: number
) => {
  missingNumbers.forEach((number) => {
    const possibleSpaceForNumber: Array<Space> = [];
    for (let i = 0; i < puzzle.length; i++) {
      let space = { row: rowNumber, column: i };
      if (puzzle[space.row][space.column].value == "") {
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
      puzzle[possibleSpaceForNumber[0].row][
        possibleSpaceForNumber[0].column
      ].value = number;
      puzzle[possibleSpaceForNumber[0].row][
        possibleSpaceForNumber[0].column
      ].changed = true;
    }
  });
};

const countFalseChanges = (inputPuzzle: SpaceValue[][]): number => {
  let counter = 0;
  for (let i = 0; i < inputPuzzle.length; i++) {
    for (let j = 0; j < inputPuzzle[i].length; j++) {
      if (inputPuzzle[i][j].changed === false) {
        counter++;
      }
    }
  }
  return counter;
};

export type SolvePuzzleReturnType = {
  puzzle?: SpaceValue[][];
  message?: string;
};

export const solvePuzzle = (
  inputPuzzle: SpaceValue[][]
): SolvePuzzleReturnType => {
  while (countFalseChanges(inputPuzzle) != 0) {
    try {
      const initialFalseCount = countFalseChanges(inputPuzzle);
      for (let i = 0; i < inputPuzzle.length; i++) {
        const missingNumbers = checkIfNumberPresent(inputPuzzle[i]);
        checkNumber(missingNumbers, inputPuzzle, i);
        for (let j = 0; j < inputPuzzle[i].length; j++) {
          let space: Space = { row: i, column: j };
          checkSpace(space, missingNumbers, inputPuzzle);
        }
      }
      const finalFalseCount = countFalseChanges(inputPuzzle);
      if (initialFalseCount === finalFalseCount && finalFalseCount != 0) {
        throw new Error();
      }
    } catch (e: any) {
      return {
        message:
          "Could not solve, please check you have entered the correct values.",
      };
    }
  }

  return { puzzle: inputPuzzle };
};
