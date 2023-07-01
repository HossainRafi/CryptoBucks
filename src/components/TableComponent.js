import React from "react";

const TableComponent = () => {
  return (
    <div className="flex flex-col mt-9 border border-gray-100 rounded">
      <table>
        <thead>
          <tr>
            <th>asset</th>
            <th>name</th>
            <th>price</th>
            <th>total volume</th>
            <th>maeket cap change</th>
            <th>1H</th>
            <th>24H</th>
            <th>7D</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>asset</td>
            <td>name</td>
            <td>price</td>
            <td>total volume</td>
            <td>maeket cap change</td>
            <td>1H</td>
            <td>24H</td>
            <td>7D</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
