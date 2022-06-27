import React from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import Label from "../label/Label";
import Radio from "../radio/Radio";
import { useForm } from "react-hook-form";
import { Status } from "../../utils/contains";
const PostEdit = () => {
  const {
    watch,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      status: 1,
    },
  });

  const WatchStatus = watch("status");
  const handleUpdatePost = (values) => {};

  return (
    <form onSubmit={handleSubmit(handleUpdatePost)} className="post-save">
      <Input name="name" type="text" control={control} />
      <Label>Status</Label>
      <div className="post-status">
        <div className="post-status--item">
          <Radio
            checked={Number(WatchStatus) === Status.APPROVED}
            value={Number(Status.APPROVED)}
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
            REJECT
          </Radio>
        </div>
      </div>
      <Button isLoading={isSubmitting} disabled={isSubmitting} type="submit">
        Update post
      </Button>
    </form>
  );
};

export default PostEdit;
