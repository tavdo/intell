// src/components/SpecificationsTable.js
import React from 'react';

const SpecificationsTable = ({ specs }) => (
  <table className="spec-table">
    <thead>
      <tr>
        <th>Feature</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      {specs.map((spec, index) => (
        <tr key={index}>
          <td>{spec.feature}</td>
          <td>{spec.value}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default SpecificationsTable;
