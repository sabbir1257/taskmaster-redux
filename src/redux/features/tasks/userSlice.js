import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Sakib",
  email: "sakib@gmail.com",
 };

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});



export default userSlice.reducer;