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
  const handleAddNewPost = (values) => {
    console.log(
      "🚀 ~ file: Postsave.js ~ line 16 ~ handleAddNewPost ~ values",
      values
    );
  };
  return (
    <form onSubmit={handleSubmit(handleAddNewPost)} className="post-save">
      <Input name="name" type="text" control={control} />
      <Label>Status</Label>
      <div className="post-status">
        <div className="post-status--item">
          <Radio name="status" control={control}>
            APPROVE
          </Radio>
        </div>
      </div>
      <button type="submit">Add new post</button>
    </form>
  );
};

export default Postsave;
