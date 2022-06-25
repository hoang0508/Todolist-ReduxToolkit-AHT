import { collection } from "firebase/firestore";
import React from "react";
import "./App.css";
import { db } from "./firebase/Firebase-config";
import { Fetchdata } from "./redux/globalSlice";

function App() {
  // const dataList = Fetchdata(db, "post");
  // console.log("🚀 ~ file: App.js ~ line 8 ~ App ~ dataList", dataList);
  const colRef = collection(db, "post");
  console.log("🚀 ~ file: App.js ~ line 11 ~ App ~ colRef", colRef.data());
  return <></>;
}

export default App;
