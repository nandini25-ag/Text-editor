// File.js
import React, { useState, useRef } from 'react';
import './File.css';

const File = () => {
  const [content, setContent] = useState('');
  const editorRef = useRef(null);

  const handleFormat = (format) => {
    document.execCommand(format, false, null);
    editorRef.current.focus();
  };

  return (
    <div className="editor-container">
      <div className="toolbar">
        <button onClick={() => handleFormat('bold')}>Bold</button>
        <button onClick={() => handleFormat('italic')}>Italic</button>
        <button onClick={() => handleFormat('underline')}>Underline</button>
        {/* Add more formatting options as needed */}
      </div>
      <div
        ref={editorRef}
        className="editor"
        contentEditable
        dangerouslySetInnerHTML={{ __html: content }}
        onInput={(e) => setContent(e.currentTarget.innerHTML)}
      />
    </div>
  );
};

export default File;
