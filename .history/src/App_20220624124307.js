import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { db } from "./firebase/Firebase-config";
import { Fetchdata } from "./redux/globalSlice";

function App() {
  // const dataList = Fetchdata(db, "post");
  // console.log("🚀 ~ file: App.js ~ line 8 ~ App ~ dataList", dataList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Fetchdata());
  }, []);
  return <></>;
}

export default App;
