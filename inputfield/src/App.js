import React, { useState } from 'react';

const TableGenerator = () => {
  const [number, setNumber] = useState('');

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const generateTable = () => {
    const tableRows = [];
    for (let i = 1; i <= number; i++) {
      tableRows.push(
        <tr key={i}>
          <td>{i}</td>
        </tr>
      );
    }
    return tableRows;
  };

  return (
    <div>
      <input type="number" value={number} onChange={handleNumberChange} />
      <table>
        <tbody>
          {generateTable()}
        </tbody>
      </table>
    </div>
  );
};

export default TableGenerator;
