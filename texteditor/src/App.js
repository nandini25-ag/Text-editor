// App.js
import React, { useState } from 'react';
import File from './File';

function App() {
  const [files, setFiles] = useState([
    { id: 1, name: 'File 1', content: '' },
    { id: 2, name: 'File 2', content: '' },
    // Add more files as needed
  ]);

  const handleContentChange = (id, newContent) => {
    setFiles((prevFiles) =>
      prevFiles.map((file) =>
        file.id === id ? { ...file, content: newContent } : file
      )
    );
  };

  return (
    <div>
      {files.map((file) => (
        <div key={file.id}>
          <h3>{file.name}</h3>
          <File content={file.content} onContentChange={(newContent) => handleContentChange(file.id, newContent)} />
        </div>
      ))}
    </div>
  );
}

export default App;
