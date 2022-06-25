import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fetchdata } from "../../redux/globalSlice";
import "./List.scss";

const List = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.global.data);
  useEffect(() => {
    dispatch(Fetchdata());
  }, [dispatch]);
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
          {data &&
            data.length > 0 &&
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>Germany</td>
                <div></div>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
