import React, { useState } from "react";
import { createSolvedSudoku } from "../../ts/createSolvedSudoku";
import { Soduku } from "../SodukuComponent/sodukuComponent";

import "./BlankSudoku.css";

export interface SpaceValue {
  value: string;
  changed: boolean;
  id: string;
}

export class BlankSoduku extends React.Component {
  createSudoku(): SpaceValue[][] {
    let blankSudoku = [];
    for (let i = 0; i <= 8; i++) {
      blankSudoku.push([
        { id: `A${i}`, changed: false, value: "" },
        { id: `B${i}`, changed: false, value: "" },
        { id: `C${i}`, changed: false, value: "" },
        { id: `D${i}`, changed: false, value: "" },
        { id: `E${i}`, changed: false, value: "" },
        { id: `F${i}`, changed: false, value: "" },
        { id: `G${i}`, changed: false, value: "" },
        { id: `H${i}`, changed: false, value: "" },
        { id: `I${i}`, changed: false, value: "" },
      ]);
    }
    return blankSudoku;
  }

  state = {
    board: this.createSudoku(),
    FormStatus: "READY",
    solvedPuzzleSection: <></>,
  };

  submit = (event: React.FormEvent, unsolvedPuzzle: SpaceValue[][]) => {
    event.preventDefault();
    const solvedPuzzle = createSolvedSudoku(unsolvedPuzzle);
    this.setState({
      FormStatus: "FINISHED",
      solvedPuzzleSection: <Soduku puzzle={solvedPuzzle} />,
    });
  };

  handleChange(
    e: React.FormEvent,
    row: number,
    column: number,
    number: string
  ): void {
    let newPuzzle = this.state.board;
    let newSpace = { ...newPuzzle[row][column] };
    newSpace.changed = true;
    newSpace.value = number;
    newPuzzle[row][column] = newSpace;
    this.setState({ board: newPuzzle, FormStatus: "SUBMITTING" });
  }

  render() {
    return (
      <div>
        <form>
          <div className="blank-grid-container">
            {this.state.board.map((row, i) =>
              row.map((space, j) => (
                <input
                  className="blank-grid-item"
                  type={"string"}
                  placeholder={space.value}
                  onChange={(event) => {
                    this.handleChange(event, i, j, event.target.value);
                  }}
                ></input>
              ))
            )}
          </div>
          <button
            type="submit"
            className="submit-button"
            onClick={(event) => this.submit(event, this.state.board)}
          >
            Solve
          </button>
        </form>
        {this.state.solvedPuzzleSection}
      </div>
    );
  }
}
