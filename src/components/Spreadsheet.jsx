import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import DataGrid from 'react-data-grid';

const columns = [
  { key: 'component', name: 'component' },
  { key: 'lowest', name: 'Low Estimate' },
  { key: 'highest', name: 'High Estimate' }
];

// let rows = [
//   { id: 0, title: 'Example' },
//   { id: 1, title: 'Demo' }
// ];


export default function EditorWindow({ rows, setRows }) {
  let [is_loaded, setis_loaded] = useState(false);
  useEffect(() => {
    setis_loaded(true);
    return () => {
      // cleanup
    }
  }, [setRows])
  return (
    <div style={{ height: '100vh', width: '50vw' }}>
      {is_loaded ? <DataGrid columns={columns} rows={rows} /> : <div>Loading...</div>}
    </div>
  );
}
