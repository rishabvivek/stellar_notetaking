import React from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import "./Editor.css"

function MyEditor() {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty()
  );

  return (
    <div className='editor-container'>
      <div className='editor-wrapper'>
        <Editor editorState={editorState} onChange={setEditorState} />
      </div>
  </div>
  );
}

export default MyEditor;
