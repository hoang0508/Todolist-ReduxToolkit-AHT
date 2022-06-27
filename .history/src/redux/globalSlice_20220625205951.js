import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/Firebase-config";

// Fetch data
export const Fetchdata = createAsyncThunk(
  "firebaseData",
  async (dispatch, getState) => {
    const colRef = collection(db, "post");
    const response = await new Promise((resolve, reject) => {
      onSnapshot(colRef, (snapshot) => {
        let result = [];
        snapshot.forEach((doc) => {
          result.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        // return result;
        resolve(result);
      });
    });
    return response;
  }
);

// Update data
export const FetchUpdateData = createAsyncThunk(
  "updatedata",
  async (payload) => {
    console.log("🚀 ~ file: globalSlice.js ~ line 29 ~ payload", payload);
    const colRef = doc(db, "post", payload);
    const sigleDoc = await getDoc(colRef);
    return sigleDoc.data();
  }
);

const globalSlice = createSlice({
  name: "global",
  initialState: {
    data: [],
    dataUpdate: [],
    isLoading: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    // Bắt đầu thực hiện action login (Promise pending)
    builder.addCase(Fetchdata.pending, (state) => {
      // Bật trạng thái loading
      state.isLoading = true;
    });

    builder.addCase(FetchUpdateData.pending, (state) => {
      // Bật trạng thái loading
      state.isLoading = true;
    });

    // Khi thực hiện action  Fetchdata thành công (Promise fulfilled)
    builder.addCase(Fetchdata.fulfilled, (state, action) => {
      // Tắt trạng thái loading, lưu thông tin user vào store
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(FetchUpdateData.fulfilled, (state, action) => {
      // Tắt trạng thái loading, lưu thông tin user vào store
      state.isLoading = false;
      state.dataUpdate = action.payload;
    });

    // Khi thực hiện action  Fetchdata thất bại (Promise rejected)
    builder.addCase(Fetchdata.rejected, (state, action) => {
      // Tắt trạng thái loading, lưu thông báo lỗi vào store
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
  },
});

export const {} = globalSlice.actions;

export default globalSlice.reducer;
