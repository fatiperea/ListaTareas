import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import ListaTareas from "./ListaTareas";

const FormTareas = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas]= useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTareas([...tareas, tarea]);
    setTarea('');

  }

  const borrarTareas = (nombreTarea) => {
    const copiaTareas=tareas.filter((tarea) => tarea!== nombreTarea);
    setTareas(copiaTareas);
  }

  return (
    <section>
      <Form onSubmit={handleSubmit}>
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
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas tareas={tareas} borrarTareas={borrarTareas}></ListaTareas>
    </section>
  );
};

export default FormTareas;
