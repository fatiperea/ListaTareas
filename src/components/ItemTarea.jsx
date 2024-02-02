import { ListGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";

const ItemTarea = ({ nombreTarea }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {nombreTarea}{" "}
      <Button variant="danger" onClick={()=> borrarTareas(nombreTarea)}>
        Borrar
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
