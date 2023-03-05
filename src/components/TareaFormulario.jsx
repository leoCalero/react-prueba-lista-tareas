import { useState } from "react";
import "../styles/TareaFormulario.css";
import { v4 as uuidv4 } from "uuid";

const TareaFormulario = ({ onSubmit }) => {
  const [input, setInput] = useState("");
  const manejarCambio = (e) => setInput(e.target.value);
  const manejarEnvio = (e) => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };
    onSubmit(tareaNueva);
  };

  return (
    <form className="tareaFormulario" onSubmit={manejarEnvio}>
      <input
        type="text"
        className="tareaInput"
        name="texto"
        placeholder="Tarea..."
        onChange={manejarCambio}
      />
      <button className="tareaBoton">Agregar</button>
    </form>
  );
};

export default TareaFormulario;
