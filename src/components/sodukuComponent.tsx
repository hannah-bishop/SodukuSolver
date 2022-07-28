import React, { FunctionComponent } from "react";
import { solvePuzzle } from "../sodukuSolver";

interface SodukuProps {
  puzzle: string[][];
}

export const Soduku: FunctionComponent<SodukuProps> = (
  sodukuProps: SodukuProps
) => {
  const solvedPuzzle = solvePuzzle(sodukuProps.puzzle);
  return (
    <div>
      <p>{solvedPuzzle[0]}</p>
      <p>{solvedPuzzle[1]}</p>
      <p>{solvedPuzzle[2]}</p>
      <p>{solvedPuzzle[3]}</p>
      <p>{solvedPuzzle[4]}</p>
      <p>{solvedPuzzle[5]}</p>
      <p>{solvedPuzzle[6]}</p>
      <p>{solvedPuzzle[7]}</p>
      <p>{solvedPuzzle[8]}</p>
    </div>
  );
};
