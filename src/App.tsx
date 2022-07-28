import "./App.css";
import { Soduku } from "./components/sodukuComponent";
import { puzzle, puzzle2, puzzle3, puzzle4 } from "./puzzle";

function App() {
  return (
    <div className="App">
      <Soduku puzzle={puzzle3} />
    </div>
  );
}

export default App;
