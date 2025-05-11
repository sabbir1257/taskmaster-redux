import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Sakib",
  email: "sakib@gmail.com",
  userTasks: [],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});



export default userSlice.reducer;