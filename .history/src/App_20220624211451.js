import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import List from "./components/list/List";
import { Fetchdata } from "./redux/globalSlice";

function App() {
  return (
    <>
      <div className="post">
        <h3 className="post-title">Post Todo list</h3>
        <List />
      </div>
    </>
  );
}

export default App;
