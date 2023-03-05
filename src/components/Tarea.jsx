import "../styles/Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Tarea = ({
  id,
  texto,
  completada = false,
  completarTarea,
  eliminarTarea,
}) => {
  return (
    <div
      className={
        completada ? "tareaContenedor tareaCompletada" : "tareaContenedor"
      }
      // className={`tareaContenedor ${completada ? "tareaCompletada" : ""}`.trimEnd()}
    >
      <div className="tareaTexto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div className="tareaContenedorIconos" onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className="tareaIcono" title="Eliminar tarea" />
      </div>
    </div>
  );
};

export default Tarea;
