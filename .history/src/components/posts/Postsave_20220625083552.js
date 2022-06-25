import React from "react";
import Input from "../input/Input";
import Label from "../label/Label";
import Radio from "../radio/Radio";
import "../input/input.scss";
import { useForm } from "react-hook-form";
import { Status } from "../../utils/contains";
const Postsave = () => {
  const { watch, handleSubmit, control } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      status: 1,
    },
  });

  const WatchStatus = watch("status");

  // Submit
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
          <Radio
            checked={Number(WatchStatus) === Status.APPROVED}
            value={Status.APPROVED}
            name="status"
            control={control}
          >
            APPROVE
          </Radio>
        </div>
        <div className="post-status--item">
          <Radio
            checked={Number(WatchStatus) === Status.PENDING}
            value={Status.PENDING}
            name="status"
            control={control}
          >
            PENDING
          </Radio>
        </div>
        <div className="post-status--item">
          <Radio
            checked={Number(WatchStatus) === Status.REJECT}
            value={Status.REJECT}
            name="status"
            control={control}
          >
            APPROVE
          </Radio>
        </div>
      </div>
      <button type="submit">Add new post</button>
    </form>
  );
};

export default Postsave;
