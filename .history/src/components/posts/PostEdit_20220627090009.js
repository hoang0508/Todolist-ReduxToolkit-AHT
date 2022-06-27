import React, { useEffect, useLayoutEffect } from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import Label from "../label/Label";
import Radio from "../radio/Radio";
import { useForm } from "react-hook-form";
import { Status } from "../../utils/contains";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FetchUpdateData } from "../../redux/globalSlice";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/Firebase-config";
import { toast } from "react-toastify";
const PostEdit = () => {
  const {
    watch,
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {},
  });
  // param
  const [param] = useSearchParams();
  const idName = param.get("id");

  // navigate
  const navigate = useNavigate();
  //watch
  const WatchStatus = watch("status");

  const dispatch = useDispatch();
  const update = useSelector((state) => state.global.dataUpdate);

  // dispatch
  useEffect(() => {
    dispatch(FetchUpdateData(idName));
  }, [dispatch, idName]);

  // Reset
  useEffect(() => {
    reset(update);
  }, [update]);

  const handleUpdatePost = async (values) => {
    const colRef = doc(db, "post", idName);
    await updateDoc(colRef, {
      name: values.name,
      createAt: serverTimestamp(),
      status: Number(values.status),
    });
    toast.success("Update post successfully!!");
    navigate("/");
  };

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
      <Button type="submit">Update post</Button>
    </form>
  );
};

export default PostEdit;
