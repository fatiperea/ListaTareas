import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import ListaTareas from "./ListaTareas";

const FormTareas = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas]= useState([]);

  return (
    <section>
      <Form>
        <Form.Group
          className="mb-3 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          {/*}<Form.Label>Ingresar tareas:</Form.Label>{*/}
          <Form.Control
            type="text"
            placeholder="Ej: tarea 1"
            minLength={3}
            maxLength={50}
            onChange={(e)=>{setTarea(e.target.value)}}
            value={tarea}
          />
          <Button variant="info" className="mx-2" type="submit">
            Agregar tarea
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas></ListaTareas>
    </section>
  );
};

export default FormTareas;
