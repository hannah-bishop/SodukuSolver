import React, { FunctionComponent } from "react";
import { solvePuzzle } from "../../ts/sodukuSolver";
import "./sodukuComponent.css";

interface SodukuProps {
  puzzle: string[][];
}

export const Soduku: FunctionComponent<SodukuProps> = (
  sodukuProps: SodukuProps
) => {
  return (
    <div className="grid-container">
      {sodukuProps.puzzle.map((row) =>
        row.map((space) => <p className="grid-item">{space}</p>)
      )}
    </div>
  );
};
