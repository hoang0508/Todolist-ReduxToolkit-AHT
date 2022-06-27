import React from "react";
import Input from "../input/Input";
import Label from "../label/Label";
import Radio from "../radio/Radio";
import "../input/input.scss";
import { useForm } from "react-hook-form";
import { Status } from "../../utils/contains";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/Firebase-config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import Button from "../button/Button";
const Postsave = () => {
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

  // navigate
  const navigate = useNavigate();
  // Submit
  const handleAddNewPost = async (values) => {
    const newValues = { ...values };

    newValues.status = Number(newValues.status);
    const colRef = collection(db, "post");
    try {
      await addDoc(colRef, {
        ...newValues,
        createAt: serverTimestamp(),
      });
      toast.success("Add new successfully!!");
      navigate(`/`);
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(handleAddNewPost)} className="post-save">
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
        Add new post
      </Button>
    </form>
  );
};

export default Postsave;
