// import logo from "./logo.svg";
import "./App.css";
import Movie from "./hoc/movie";
import Counter from "./hooks/counter";
import Users from "./hooks/Users";

function App() {
    return (
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.js</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>
        <div>
            <Movie id={1} />
            <Counter />
            <Users />
        </div>
    );
}

export default App;
