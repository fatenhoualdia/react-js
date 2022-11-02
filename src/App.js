
import './App.css';
import {Form, Container, Button} from 'react-bootstrap';

function App() {
  return (
    <Container fluid="md">
      <Form>
        <Form.Group>
          <Form.Label>Adresse email</Form.Label>
          <Form.Control type="email" placeholder="Entrez votre adresse email"></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Objet du mail</Form.Label>
          <Form.Control type="email" placeholder="Entrez votre adresse email"></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Message à envoyer</Form.Label>
          <Form.Control as="textarea" row={20} placeholder="Youpi ton premier message..."></Form.Control>
        </Form.Group>

        <Button variant="primary" size="lg" block >Envoyer le message</Button>
      </Form>
    </Container>
  );
}

export default App;
