import "./App.css";
import { BlankSoduku } from "./components/BlankSudoku/BlankSudoku";
import { Soduku } from "./components/SodukuComponent/sodukuComponent";
import { puzzle, puzzle2, puzzle3, puzzle4 } from "./ts/puzzle";

function App() {
  return (
    <div className="App">
      <h1>Sudoku Solver</h1>
      <BlankSoduku />
    </div>
  );
}

export default App;
