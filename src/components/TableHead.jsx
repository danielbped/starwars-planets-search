import React from 'react';

function TableHead() {
  const tableHeaders = [
    'Name',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water',
    'Population',
    'Films',
    'Created',
    'Edited',
    'URL',
  ];

  return (
    <tr>
      {tableHeaders.map((tableHeader) => (
        <th key={ tableHeader }>{ tableHeader }</th>
      ))}
    </tr>
  );
}

export default TableHead;
