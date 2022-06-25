import React from "react";
import { Route, Routes } from "react-router";

import "./App.scss";
import List from "./components/list/List";
import Postsave from "./components/posts/Postsave";

function App() {
  return (
    <>
      <div className="post">
        <h3 className="post-title">Post Todo list</h3>
        <Routes>
          <Route path="/" element={<List />}></Route>
          <Route path="/save" element={<Postsave />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
