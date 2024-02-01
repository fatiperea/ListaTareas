import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import FormTareas from './components/FormTareas';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

function App() {

  return (
    <> 
    <Container className='my-4'>
      <h1 className='text-center display-3'>LISTA DE TAREAS</h1>
      <FormTareas></FormTareas>
    </Container>
    <Footer></Footer>
    </>
  )
}

export default App
