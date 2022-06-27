import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Fetchdata, FetchDeleteData } from "../../redux/globalSlice";
import { Status } from "../../utils/contains";
import ActionDelete from "../actions/ActionDelete";
import ActionEdit from "../actions/ActionEdit";
import ActionSave from "../actions/ActionSave";
import LabelStatus from "../status/LabelStatus";
import "./List.scss";

const List = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.global.data);

  const loading = useSelector((state) => state.global.isLoading);
  useEffect(() => {
    dispatch(Fetchdata());
  }, [dispatch]);

  // Save click
  const navigate = useNavigate();
  const handleClickSave = () => {
    navigate(`/save`);
  };

  // Edit click
  const handleEditPost = (id) => {
    navigate(`/edit?id=${id}`);
  };

  // DELETE
  const handleDeltePost = async (id) => {
    dispatch(FetchDeleteData(id));
    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You won't be able to revert this!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, delete it!",
    // }).then(async (result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire("Deleted!", "Your file has been deleted.", "success");
    //   }
    // });
  };

  return (
    <div>
      <table id="customers">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && (
            <tr>
              <td>
                <div className="lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </td>
            </tr>
          )}
          {data &&
            data.length > 0 &&
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  {Number(item.status) === Status.APPROVED && (
                    <LabelStatus type="success">APPROVED</LabelStatus>
                  )}
                  {Number(item.status) === Status.PENDING && (
                    <LabelStatus type="warning">PENDING</LabelStatus>
                  )}
                  {Number(item.status) === Status.REJECT && (
                    <LabelStatus type="danger">REJECT</LabelStatus>
                  )}
                </td>
                <td>
                  {item?.createAt?.seconds
                    ? new Date(item?.createAt?.seconds * 1000).toLocaleString()
                    : new Date()}
                </td>
                <td>
                  <div className="action">
                    <ActionEdit onClick={() => handleEditPost(item.id)} />
                    <ActionDelete onClick={() => handleDeltePost(item.id)} />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div>
        {data.length <= 0 && (
          <div className="post-null">
            <h3>Chưa có bài post!!</h3>
            <div className="action">
              <ActionSave onClick={handleClickSave} />
            </div>
          </div>
        )}
      </div>
      <div>
        {data.length > 0 && (
          <div className="post-null">
            <h3>Thêm bài post!!</h3>
            <div className="action">
              <ActionSave onClick={handleClickSave} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
