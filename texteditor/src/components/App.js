// App.js
import React, { useState } from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextEditor from './TextEditor';
import '../App.css'; // Import the CSS file

function App() {
  const [file, setFile] = useState({
    name: 'My Document',
    content: '',
  });

  const handleContentChange = (newContent) => {
    setFile((prevFile) => ({ ...prevFile, content: newContent }));
  };

  return (
    <Container fluid>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Text Editor</Navbar.Brand>
      </Navbar>
      <Row className="mt-3 justify-content-center">
        <Col md={8}>
          <TextEditor
            name={file.name}
            content={file.content}
            onContentChange={handleContentChange}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
