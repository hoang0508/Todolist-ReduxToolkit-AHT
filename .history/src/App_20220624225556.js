import React from "react";
import { Route, Routes } from "react-router";

import "./App.scss";
import List from "./components/list/List";
import Postsave from "./components/posts/Postsave";

function App() {
  return (
    <>
      <Routes>
        <div className="post">
          <h3 className="post-title">Post Todo list</h3>
          <List />
          <Route path="/save" element={<Postsave />}></Route>
        </div>
      </Routes>
    </>
  );
}

export default App;
