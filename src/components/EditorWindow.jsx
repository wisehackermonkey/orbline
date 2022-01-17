import React, { useRef } from "react";

import Editor from "@monaco-editor/react";
export default function EditorWindow({setEditorText}) {

  const editorRef = useRef(null);
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    alert(editorRef.current.getValue());
  }
  function getValue(){
    return editorRef.current.getValue();
  }
  return (
    <div>
      <Editor
        height="90vh"
        width="50vw"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
        onChange={setEditorText}
      />
    </div>
  );
}
