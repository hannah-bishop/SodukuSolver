import React from "react";
import { solvePuzzle } from "../../ts/sodukuSolver";
import { Soduku } from "../SodukuComponent/sodukuComponent";
import { newPuzzle } from "../../ts/puzzle";

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
    warningMessage: <></>,
  };

  submit = (event: React.FormEvent, unsolvedPuzzle: SpaceValue[][]) => {
    event.preventDefault();
    const solvedPuzzle = solvePuzzle(unsolvedPuzzle);
    if (solvedPuzzle.puzzle) {
      this.setState({
        FormStatus: "FINISHED",
        solvedPuzzleSection: <Soduku puzzle={solvedPuzzle.puzzle} />,
      });
    } else {
      this.setState({
        FormStatus: "FAILED",
        solvedPuzzleSection: <>{solvedPuzzle.message}</>,
      });
    }
  };

  handleChange(
    e: React.FormEvent,
    row: number,
    column: number,
    number: string
  ): void {
    let newPuzzle = this.state.board;
    let newSpace = { ...newPuzzle[row][column] };
    if (number != "") {
      newSpace.changed = true;
    } else {
      newSpace.changed = false;
    }
    newSpace.value = number;
    newPuzzle[row][column] = newSpace;
    this.setState({
      board: newPuzzle,
      FormStatus: "SUBMITTING",
      solvedPuzzleSection: <></>,
    });
  }

  numbersOnly(input: string): string {
    var regex = /[^123456789]/;
    if (input != "" && regex.test(input)) {
      const newvar = input.replace(regex, "");
      this.setState({
        warningMessage: (
          <>
            You have entered an invalid character, please review your submission
          </>
        ),
      });
      return newvar;
    }
    this.setState({
      warningMessage: <></>,
    });
    return input;
  }

  render() {
    return (
      <div className="page">
        <form>
          <div className="grid-container">
            {this.state.board.map((row, i) =>
              row.map((space, j) => (
                <input
                  className="grid-item"
                  type={"text"}
                  pattern="[1-9]*"
                  onChange={(event) => {
                    const input = this.numbersOnly(event.target.value);
                    this.handleChange(event, i, j, input);
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
        {this.state.warningMessage}
      </div>
    );
  }
}
