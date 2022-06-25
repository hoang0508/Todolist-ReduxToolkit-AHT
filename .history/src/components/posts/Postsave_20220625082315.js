import React from "react";
import Input from "../input/Input";
import Label from "../label/Label";
import Radio from "../radio/Radio";
import "../input/input.scss";
import { useForm } from "react-hook-form";
const Postsave = () => {
  const { watch, handleSubmit, control } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      status: 1,
    },
  });
  const handleAddNewPost = () => {};
  return (
    <form onSubmit={handleSubmit(handleAddNewPost)} className="post-save">
      <Input />
      <Label>Status</Label>
      <div className="post-status">
        <div className="post-status--item">
          <Radio>APPROVE</Radio>
        </div>
      </div>
      <button>Add new post</button>
    </form>
  );
};

export default Postsave;
