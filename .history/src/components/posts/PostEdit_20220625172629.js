import React, { useEffect } from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import Label from "../label/Label";
import Radio from "../radio/Radio";
import { useForm } from "react-hook-form";
import { Status } from "../../utils/contains";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { FetchUpdateData } from "../../redux/globalSlice";
import { collection, getDoc } from "firebase/firestore";
import { db } from "../../firebase/Firebase-config";
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

  const WatchStatus = watch("status");

  const dispatch = useDispatch();
  const dt = useSelector((state) => state.global.dataUpdate);

  useEffect(() => {
    // dispatch(FetchUpdateData(idName));
    async function Fetchdata() {
      const colRef = collection(db, "post", idName);
      const sigleDoc = await getDoc(colRef);
      console.log(sigleDoc.data());
    }
    Fetchdata();
  }, []);

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
