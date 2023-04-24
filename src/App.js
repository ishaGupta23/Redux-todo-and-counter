import logo from "./logo.svg";
import "./App.css";
import Todos from "./todo/todu";
import { Provider } from "react-redux";
import { state, store } from ".";
import Counter from "./counter/counter";

function App() {
  return (
    <div className="App">
      <h1>Todo-List Assignment using Redux</h1>
      <Provider store={state}>
        <Todos />
      </Provider>
      <h1 style={{ marginTop: "150px" }}>Counter Assignment using Redux</h1>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;