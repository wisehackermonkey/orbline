import { useState, useEffect } from 'react'
import './App.css'
import EditorWindow from './components/EditorWindow'
import Spreadsheet from './components/Spreadsheet'
import Layout from './Layout'
import OutlineToSpreadsheet from './lib/OutlineToSpreadsheet'
function App() {
  const [rows, setRows] = useState(null)
  const [editorText, setEditorText] = useState(null)
  useEffect(() => {
    setRows([
      { id: 0, title: 'Example' },
      { id: 1, title: 'Demo' }
    ])

  }, [])

  useEffect(() => {
    // alert(editorText)
    if (editorText) {
      // console.log()
      setRows(OutlineToSpreadsheet(editorText))

      localStorage.editorSavedText = editorText;

    }
  }, [editorText])

  return (
    <div className="App">
      <Layout >
        <EditorWindow setEditorText={setEditorText} />


        <Spreadsheet rows={rows} setRows={setRows} />
      </Layout>
    </div>
  )
}

export default App
