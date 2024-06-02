import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoCounter/>
      <TodoSearch/>

      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>
      
      <CreateTodoButtom/>
    </div>
  );
}

function TodoItem(){
  return(
    <li>
      <span>V</span>
      <p>A llorar a la lloreria</p>
      <span>X</span>
    </li>
  );
}

export default App;
