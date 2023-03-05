import "./App.css";
import ListaTareas from "./components/ListaTareas";

function App() {
  return (
    <div className="App">
      <div className="tareasListaPrincipal">
        <h1>Lista de Tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
