import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect } from "react";
import "./App.css";
import { db } from "./firebase/Firebase-config";
import { Fetchdata } from "./redux/globalSlice";

function App() {
  // const dataList = Fetchdata(db, "post");
  // console.log("🚀 ~ file: App.js ~ line 8 ~ App ~ dataList", dataList);
  const colRef = collection(db, "post");
  useEffect(() => {
    onSnapshot(colRef, (snapshot) => {
      let result = [];
      snapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log(result);
    });
  }, []);
  return <></>;
}

export default App;
