// File.js
import React from 'react';
import RichTextEditor from './components/RichTextEditor';

const File = ({ id, name, initialContent, onContentChange }) => {
  return (
    <div>
      <h3>{name}</h3>
      <RichTextEditor fileId={id} initialContent={initialContent} onContentChange={onContentChange} />
    </div>
  );
};

export default File;

