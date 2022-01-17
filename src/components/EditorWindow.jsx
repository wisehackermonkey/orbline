import React from "react";
import ReactDOM from "react-dom";

import Editor from "@monaco-editor/react";
export default function EditorWindow() {
  return (
   <Editor
     height="90vh"
     defaultLanguage="javascript"
     defaultValue="// some comment"
   />
  );
}
