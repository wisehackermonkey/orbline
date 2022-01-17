import React, { useRef } from "react";

import Editor from "@monaco-editor/react";
export default function EditorWindow() {

  const editorRef = useRef(null);
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    alert(editorRef.current.getValue());
  }
  return (
    <div>
      <Editor
        height="90vh"
        width="50vw"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
      />
      <button onClick={showValue}>Sync</button>
    </div>
  );
}
