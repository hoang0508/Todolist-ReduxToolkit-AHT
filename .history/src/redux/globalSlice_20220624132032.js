import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/Firebase-config";
export const Fetchdata = createAsyncThunk(
  "firebaseData",
  async (dispatch, getState) => {
    const colRef = collection(db, "post");
    onSnapshot(colRef, (snapshot) => {
      let result = [];
      snapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log(
        "🚀 ~ file: globalSlice.js ~ line 18 ~ onSnapshot ~ result",
        result
      );
      return result;
    });
  }
);

const globalSlice = createSlice({
  name: "global",
  initialState: {
    data: null,
    isLoading: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: {
    [Fetchdata.pending]: (state, action) => {
      state.status = "loading";
    },
    [Fetchdata.fulfilled]: (state, action) => {
      state.status = "success";
      state.data = action.payload;
    },
    [Fetchdata.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const {} = globalSlice.actions;

export default globalSlice.reducer;
