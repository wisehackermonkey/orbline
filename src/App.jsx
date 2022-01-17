import { useState } from 'react'
import './App.css'
import EditorWindow from './components/EditorWindow'
import Layout from './Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Layout>
        <EditorWindow />
      </Layout>
    </div>
  )
}

export default App
