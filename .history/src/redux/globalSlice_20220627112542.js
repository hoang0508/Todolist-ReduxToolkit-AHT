import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
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
    const colRef = doc(db, "post", payload);
    const sigleDoc = await getDoc(colRef);
    return sigleDoc.data();
  }
);

// DELETE  data
export const FetchDeleteData = createAsyncThunk(
  "deletedata",
  async (payload, { getState }) => {
    try {
      const colRef = doc(db, "post", payload);
      await deleteDoc(colRef);

      return payload;
    } catch (error) {
      console.log(error);
    }
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

    builder.addCase(FetchDeleteData.pending, (state) => {
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
      state.isLoading = false;
      state.dataUpdate = action.payload;
    });

    builder.addCase(FetchDeleteData.fulfilled, (state, action) => {
      state.isLoading = false;

      state.data = state.data.filter((item) => item.id !== action.payload);
    });

    // Khi thực hiện action  Fetchdata thất bại (Promise rejected)
    builder.addCase(Fetchdata.rejected, (state, action) => {
      // Tắt trạng thái loading, lưu thông báo lỗi vào store
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });

    builder.addCase(FetchUpdateData.rejected, (state, action) => {
      // Tắt trạng thái loading, lưu thông báo lỗi vào store
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });

    builder.addCase(FetchDeleteData.rejected, (state, action) => {
      // Tắt trạng thái loading, lưu thông báo lỗi vào store
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
  },
});

export const {} = globalSlice.actions;

export default globalSlice.reducer;
