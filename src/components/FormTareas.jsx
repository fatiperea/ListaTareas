import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import ListaTareas from "./ListaTareas";

const FormTareas = () => {
  const [tarea, setTarea] = useState("");
  const tareasLS= JSON.parse(localStorage.getItem("listaTareas")) || [];
  const [tareas, setTareas]= useState([tareasLS]);

  //useEffect(() =>{}) montaje y actualizacion, solo montaje: agrego ,[] vacio al final de la fc

  useEffect(() =>{
    localStorage.setItem("listaTareas", JSON.stringify(tareas))
  })

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
