import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fetchdata } from "../../redux/globalSlice";
import { Status } from "../../utils/contains";
import LabelStatus from "../status/LabelStatus";
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
                <td>
                  {item.status === Status.APPROVED && (
                    <LabelStatus type="success">APPROVED</LabelStatus>
                  )}
                  {item.status === Status.PENDING && (
                    <LabelStatus type="warning">PENDING</LabelStatus>
                  )}
                  {item.status === Status.REJECT && (
                    <LabelStatus type="danger">REJECT</LabelStatus>
                  )}
                </td>
                <div></div>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
