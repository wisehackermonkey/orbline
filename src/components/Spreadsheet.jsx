import React from "react";
import ReactDOM from "react-dom";
import DataGrid from 'react-data-grid';

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' }
];

const rows = [
  { id: 0, title: 'Example' },
  { id: 1, title: 'Demo' }
];


export default function EditorWindow() {
  return (
    <div style={{ height: '100vh', width: '50vw' }}>

      <DataGrid columns={columns} rows={rows} />
    </div>
  );
}
