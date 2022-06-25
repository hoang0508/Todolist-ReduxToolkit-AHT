import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, onSnapshot } from "firebase/firestore";
export const Fetchdata = createAsyncThunk("firebaseData", async (db, path) => {
  const colRef = collection(db, path);
  onSnapshot(colRef, (snapshot) => {
    let result = [];
    snapshot.forEach((doc) => {
      result.push({
        id: doc.id,
        ...doc.data(),
      });
      return result;
    });
  });
});

const globalSlice = createSlice({
  name: "global",
  initialState: {},
  reducers: {},
  extraReducers: {},
});

export const {} = globalSlice.actions;

export default globalSlice.reducer;
