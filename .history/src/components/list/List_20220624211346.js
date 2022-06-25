import React from "react";
import "./List.scss";
const List = () => {
  return (
    <div>
      <table id="customers">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <div></div>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default List;
