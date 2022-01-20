import React, { useRef } from "react";
import Editor from "@monaco-editor/react";

const sample_text = `Component:
  Lowest:
  Highest:
  `;


export default function EditorWindow({setEditorText}) {

  const editorRef = useRef(null);
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
    if (localStorage.editorSavedText === undefined) {
      localStorage.editorSavedText = sample_text;
      console.log("loaded example text")
      return
    }
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
        defaultValue={localStorage.editorSavedText}
        onMount={handleEditorDidMount}
        onChange={setEditorText}
      />
    </div>
  );
}
