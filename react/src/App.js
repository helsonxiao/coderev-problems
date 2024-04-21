// import logo from "./logo.svg";
import "./App.css";
import { CombineSetIntervealAndUseState } from "./problems/combine-setinterveal-usestate";
import { ReactKey } from "./problems/react-key";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <CombineSetIntervealAndUseState /> */}
        <ReactKey />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
