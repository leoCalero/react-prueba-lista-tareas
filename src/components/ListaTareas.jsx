import TareaFormulario from "./TareaFormulario";
import "../styles/ListaTareas.css";
import { useState } from "react";
import Tarea from "./Tarea";

const ListaTareas = () => {
  const [tareas, setTareas] = useState([]);
  const agregarTarea = (tarea) => {
    tarea.texto = tarea.texto.trim();
    if (tarea.texto) {
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };
  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };
  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id == id) tarea.completada = !tarea.completada;
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      {/* onSubmit es una convención, podría llamarlo distinto. No confundir con algún método reservado */}
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
          />
        ))}
      </div>
    </>
  );
};

export default ListaTareas;
