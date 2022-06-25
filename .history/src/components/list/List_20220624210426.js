import React from "react";
import "./List.scss";
const List = () => {
  return (
    <div>
      <table id="customers">
        <tr>
          <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Status</th>
          </thead>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
      </table>
    </div>
  );
};

export default List;
