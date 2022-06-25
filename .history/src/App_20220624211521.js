import React from "react";

import "./App.scss";
import List from "./components/list/List";

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
