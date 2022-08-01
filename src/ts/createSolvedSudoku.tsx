import { SpaceValue } from "../components/BlankSudoku/BlankSudoku";
import { solvePuzzle } from "./sodukuSolver";

export const createSolvedSudoku = (unsolvedPuzzle: SpaceValue[][]) => {
  const unsolvedPuzzleValues = unsolvedPuzzle.map((row) =>
    row.map((space) => space.value)
  );
  return solvePuzzle(unsolvedPuzzleValues);
};
