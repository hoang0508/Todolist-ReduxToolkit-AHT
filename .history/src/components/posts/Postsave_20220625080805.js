import React from "react";
import Input from "../input/Input";
import Label from "../label/Label";
import Radio from "../radio/Radio";

const Postsave = () => {
  return (
    <form className="post-save">
      <Input />
      <div className="post-status">
        <div className="post-status--item">
          <Label>Status</Label>
          <Radio>APPROVE</Radio>
        </div>
      </div>
      <button>Add new post</button>
    </form>
  );
};

export default Postsave;
