import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import List from "./components/list/List";
import { Fetchdata } from "./redux/globalSlice";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.global.data);
  useEffect(() => {
    dispatch(Fetchdata());
  }, [dispatch]);

  console.log("🚀 ~ file: App.js ~ line 17 ~ App ~ data", data);
  return (
    <>
      <div className="post">
        <h3>Post Todo list</h3>
        <List />
      </div>
    </>
  );
}

export default App;
