import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = (props) => {
  return (
    <ListGroup>
      {props.tareas.map((elemTarea, posicTarea) => 
        <ItemTarea key={posicTarea} nombreTarea={elemTarea}></ItemTarea>
      )}
    </ListGroup>
  );
};

export default ListaTareas;
