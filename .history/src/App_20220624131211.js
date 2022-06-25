import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { db } from "./firebase/Firebase-config";
import { Fetchdata } from "./redux/globalSlice";

function App() {
  // const dataList = Fetchdata(db, "post");
  // console.log("🚀 ~ file: App.js ~ line 8 ~ App ~ dataList", dataList);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.global.data);
  useEffect(() => {
    dispatch(Fetchdata());
  }, [dispatch]);

  console.log("🚀 ~ file: App.js ~ line 17 ~ App ~ data", data);
  return <></>;
}

export default App;
