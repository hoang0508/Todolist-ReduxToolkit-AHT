import React from "react";
import Input from "../input/Input";
import Label from "../label/Label";
import Radio from "../radio/Radio";

const Postsave = () => {
  return (
    <form className="post-save">
      <Input />
      <div>
        <div>
          <Label>Status</Label>
          <Radio />
        </div>
      </div>
      <button>Add new post</button>
    </form>
  );
};

export default Postsave;
