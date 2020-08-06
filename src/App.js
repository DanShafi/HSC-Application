import React from 'react';
import { Container, Row, Col }  from 'react-bootstrap'
import fullSandwich from './media/HSC-Logo-Full.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="mr-auto">
          <img className="test" src={fullSandwich} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
