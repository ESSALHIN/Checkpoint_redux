
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodo from "./components/AddTodo";
import DoneTodo from "./components/DoneTodo";
import Todos from "./components/Todos";


function App() {
  return (
    <div className="App">
      <AddTodo />
      <DoneTodo />
      <Todos />
    </div>
  );
}

export default App;
