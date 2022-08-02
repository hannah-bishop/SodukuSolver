import React, { FunctionComponent } from "react";
import { solvePuzzle } from "../../ts/sodukuSolver";
import { SpaceValue } from "../BlankSudoku/BlankSudoku";
import "../BlankSudoku/BlankSudoku.css";

interface SodukuProps {
  puzzle: SpaceValue[][];
}

export const Soduku: FunctionComponent<SodukuProps> = (
  sodukuProps: SodukuProps
) => {
  return (
    <div className="grid-container">
      {sodukuProps.puzzle.map((row) =>
        row.map((space) => <p className="grid-item">{space.value}</p>)
      )}
    </div>
  );
};
